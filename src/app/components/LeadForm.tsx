"use client";

import { useState } from "react";
import Link from "next/link";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [agreePolicy, setAgreePolicy] = useState(false);
  const [agreeProcessing, setAgreeProcessing] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const canSubmit =
    name.trim() &&
    phone.trim() &&
    telegram.trim() &&
    agreePolicy &&
    agreeProcessing &&
    status !== "sending";

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    if (!formspreeId) {
      setStatus("error");
      setErrorMessage("Форма не настроена. Напишите нам в Telegram.");
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          telegram: telegram.trim(),
          _subject: "Заявка с сайта",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Не удалось отправить заявку. Напишите в Telegram.");
        return;
      }
      setStatus("success");
      setName("");
      setPhone("");
      setTelegram("");
      setAgreePolicy(false);
      setAgreeProcessing(false);
    } catch {
      setStatus("error");
      setErrorMessage("Ошибка сети. Попробуйте позже или напишите в Telegram.");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]/50 transition-colors";

  return (
    <section
      id="lead-form"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#1a1a1a] to-[#0B0B0B]"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Оставить заявку
          </h2>
          <p className="text-gray-400">
            Оставьте контакты — мы свяжемся с вами
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-black/50 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          <div className="space-y-4 mb-6">
            <label className="block">
              <span className="text-sm text-gray-400 mb-1 block">Имя</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder="Как к вам обращаться"
                required
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-400 mb-1 block">Телефон</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
                placeholder="+7 (999) 123-45-67"
                required
                autoComplete="tel"
              />
            </label>
            <label className="block">
              <span className="text-sm text-gray-400 mb-1 block">Telegram</span>
              <input
                type="text"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                className={inputClass}
                placeholder="@username или ссылка"
                required
                autoComplete="username"
              />
            </label>
          </div>

          <div className="space-y-4 mb-8">
            <label className="flex items-start gap-3 cursor-pointer group">
              <ToggleSwitch
                checked={agreePolicy}
                onChange={setAgreePolicy}
                aria-label="Согласие с политикой конфиденциальности"
              />
              <span className="text-sm text-gray-300 group-hover:text-gray-200">
                Я ознакомлен(а) и согласен(а) с{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E50914] hover:underline"
                >
                  политикой конфиденциальности
                </Link>
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer group">
              <ToggleSwitch
                checked={agreeProcessing}
                onChange={setAgreeProcessing}
                aria-label="Согласие на обработку персональных данных"
              />
              <span className="text-sm text-gray-300 group-hover:text-gray-200">
                Даю{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E50914] hover:underline"
                >
                  согласие на обработку персональных данных
                </Link>
              </span>
            </label>
          </div>

          {status === "success" && (
            <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
              Заявка отправлена. Мы свяжемся с вами в ближайшее время.
            </div>
          )}
          {status === "error" && errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-[#E50914] hover:bg-[#c20712] text-white hover:shadow-lg hover:shadow-[#E50914]/30 disabled:hover:shadow-none"
          >
            {status === "sending" ? "Отправка…" : "Отправить заявку"}
          </button>
        </form>
      </div>
    </section>
  );
}

function ToggleSwitch({
  checked,
  onChange,
  "aria-label": ariaLabel,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  "aria-label"?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onChange(!checked)}
      className={`flex-shrink-0 inline-flex items-center w-11 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#E50914] focus:ring-offset-2 focus:ring-offset-[#0B0B0B] ${
        checked ? "bg-[#E50914]" : "bg-white/20"
      }`}
    >
      <span
        className={`block w-5 h-5 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}
