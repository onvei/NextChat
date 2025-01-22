import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";

const isApp = !!getClientConfig()?.isApp;

const fa: PartialLocaleType = {
  WIP: "به‌زودی...",
  Error: {
    Unauthorized: isApp
      ? `😆 در جریان گفتگو مشکلی پیش آمده، نگران نباشید:
    \\ 1️⃣ اگر می‌خواهید بدون تنظیمات خاصی، [همین حالا گفتگو را شروع کنید 🚀](${SAAS_CHAT_UTM_URL})
    \\ 2️⃣ اگر می‌خواهید از منابع اختصاصی OpenAI استفاده کنید، [اینجا](/#/settings) را برای ویرایش تنظیمات فشار دهید ⚙️`
      : `😆 در جریان گفتگو مشکلی پیش آمده، نگران نباشید:
    \ 1️⃣ اگر می‌خواهید بدون تنظیمات خاصی، [همین حالا گفتگو را شروع کنید 🚀](${SAAS_CHAT_UTM_URL})
    \ 2️⃣ اگر از نسخهٔ اختصاصی استفاده می‌کنید، [اینجا](/#/auth) را فشار دهید و کلید دسترسی خود را وارد کنید 🔑
    \ 3️⃣ اگر می‌خواهید از منابع اختصاصی OpenAI استفاده کنید، [اینجا](/#/settings) را برای ویرایش تنظیمات فشار دهید ⚙️
 `,
  },
  Auth: {
    Title: "نیاز به گذرواژه دارید",
    Tips: "مدیر سیستم احراز هویت با گذرواژه را فعال کرده، لطفاً کد دسترسی را در زیر وارد کنید",
    SubTips: "یا کلید API مربوط به OpenAI یا Google را وارد کنید",
    Input: "کد دسترسی را اینجا وارد کنید",
    Confirm: "تأیید",
    Later: "بعداً",
    Return: "بازگشت",
    SaasTips: "تنظیمات پیچیده است، می‌خواهم همین حالا استفاده کنم",
    TopTips:
      "🥳 پیشنهاد ویژه NextChat AI؛ همین حالا از OpenAI o1، GPT-4o، Claude-3.5 و جدیدترین مدل‌ها استفاده کنید",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} گفتگو`,
  },
  Chat: {
    SubTitle: (count: number) => `مجموع ${count} گفتگو`,
    EditMessage: {
      Title: "ویرایش سابقهٔ پیام‌ها",
      Topic: {
        Title: "موضوع گفتگو",
        SubTitle: "تغییر عنوان موضوع فعلی",
      },
    },
    Actions: {
      ChatList: "نمایش فهرست پیام‌ها",
      CompressedHistory: "نمایش تاریخچه فشرده‌شده",
      Export: "صادرات سابقهٔ گفتگو",
      Copy: "کپی",
      Stop: "توقف",
      Retry: "تلاش مجدد",
      Pin: "سنجاق کردن",
      PinToastContent: "۱ پیام در اعلان‌های اولیه سنجاق شد",
      PinToastAction: "نمایش",
      Delete: "حذف",
      Edit: "ویرایش",
      RefreshTitle: "تازه‌سازی عنوان",
      RefreshToast: "درخواست تازه‌سازی عنوان ارسال شد",
    },
    Commands: {
      new: "گفتگوی جدید",
      newm: "ایجاد گفتگو از یک ماسک",
      next: "گفتگوی بعدی",
      prev: "گفتگوی قبلی",
      clear: "پاک کردن زمینه",
      del: "حذف گفتگو",
    },
    InputActions: {
      Stop: "توقف پاسخ",
      ToBottom: "رفتن به پایین",
      Theme: {
        auto: "خودکار",
        light: "روشن",
        dark: "تیره",
      },
      Prompt: "فرمان‌های سریع",
      Masks: "همهٔ ماسک‌ها",
      Clear: "پاک کردن گفتگو",
      Settings: "تنظیمات گفتگو",
      UploadImage: "آپلود تصویر",
    },
    Rename: "تغییر نام گفتگو",
    Typing: "در حال تایپ…",
    Input: (submitKey: string) => {
      let inputHints = `${submitKey} برای ارسال`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "، Shift + Enter برای رفتن به خط بعد";
      }
      return inputHints + "، / برای تکمیل خودکار، : برای فراخوانی فرمان‌ها";
    },
    Send: "ارسال",
    Config: {
      Reset: "پاک کردن حافظه",
      SaveAs: "ذخیره به‌عنوان ماسک",
    },
    IsContext: "اعلان‌های اولیه",
  },
  Export: {
    Title: "اشتراک سابقهٔ گفتگو",
    Copy: "کپی همه",
    Download: "دانلود فایل",
    Share: "اشتراک در ShareGPT",
    MessageFromYou: "شما",
    MessageFromChatGPT: "ChatGPT",
    Format: {
      Title: "قالب خروجی",
      SubTitle: "می‌توانید متن را به صورت Markdown یا تصویر PNG خروجی بگیرید",
    },
    IncludeContext: {
      Title: "شامل زمینهٔ ماسک",
      SubTitle: "آیا می‌خواهید متن ماسک هم در پیام‌ها نمایش داده شود؟",
    },
    Steps: {
      Select: "انتخاب",
      Preview: "پیش‌نمایش",
    },
    Image: {
      Toast: "در حال ایجاد اسکرین‌شات",
      Modal: "برای ذخیرهٔ تصویر روی آن کلیک راست کرده یا انگشت را نگه دارید",
    },
  },
  Select: {
    Search: "جستجو در پیام‌ها",
    All: "انتخاب همه",
    Latest: "جدیدترین پیام‌ها",
    Clear: "پاک‌کردن انتخاب‌ها",
  },
  Memory: {
    Title: "خلاصهٔ تاریخچه",
    EmptyContent: "محتوای گفتگو خیلی کوتاه است، نیازی به خلاصه ندارد",
    Send: "فشرده‌سازی خودکار سابقهٔ گفتگو به‌عنوان زمینه",
    Copy: "کپی خلاصه",
    Reset: "[استفاده نشده]",
    ResetConfirm: "آیا از پاک‌کردن خلاصهٔ تاریخچه اطمینان دارید؟",
  },
  Home: {
    NewChat: "گفتگوی جدید",
    DeleteChat: "حذف گفتگوی انتخاب‌شده تأیید شود؟",
    DeleteToast: "گفتگو حذف شد",
    Revert: "بازگردانی",
  },
  Settings: {
    Title: "تنظیمات",
    SubTitle: "همهٔ گزینه‌های پیکربندی",

    Danger: {
      Reset: {
        Title: "بازنشانی همهٔ تنظیمات",
        SubTitle: "تمام گزینه‌های تنظیمات را به مقادیر پیش‌فرض بازگردانی می‌کند",
        Action: "همین حالا بازنشانی کن",
        Confirm: "بازنشانی همهٔ تنظیمات تأیید شود؟",
      },
      Clear: {
        Title: "پاک کردن همهٔ داده‌ها",
        SubTitle: "همهٔ گفتگوها و تنظیمات را حذف می‌کند",
        Action: "همین حالا پاک کن",
        Confirm: "پاک کردن همهٔ گفتگوها و داده‌های تنظیمات تأیید شود؟",
      },
    },
    Lang: {
      Name: "Language", // توجه: برای افزودن ترجمه‌های جدید، مقدار "Language" را تغییر ندهید
      All: "همهٔ زبان‌ها",
    },
    Avatar: "تصویر پروفایل",
    FontSize: {
      Title: "اندازهٔ فونت",
      SubTitle: "اندازهٔ فونت محتوای گفتگو",
    },
    FontFamily: {
      Title: "فونت گفتگو",
      SubTitle: "فونت متن گفتگو. اگر خالی بگذارید، از فونت پیش‌فرض جهانی استفاده می‌شود",
      Placeholder: "نام فونت",
    },
    InjectSystemPrompts: {
      Title: "تزریق پیام سیستمی",
      SubTitle:
        "برای هر درخواست، یک پیام سیستمی شبیه ChatGPT به ابتدای فهرست پیام‌ها افزوده می‌شود",
    },
    InputTemplate: {
      Title: "قالب پردازش ورودی کاربر",
      SubTitle: "آخرین پیام کاربر در این قالب جایگزین خواهد شد",
    },

    Update: {
      Version: (x: string) => `نسخهٔ فعلی: ${x}`,
      IsLatest: "شما از آخرین نسخه استفاده می‌کنید",
      CheckUpdate: "بررسی به‌روزرسانی",
      IsChecking: "در حال بررسی به‌روزرسانی...",
      FoundUpdate: (x: string) => `نسخهٔ جدیدی یافت شد: ${x}`,
      GoToUpdate: "رفتن به صفحهٔ به‌روزرسانی",
    },
    SendKey: "کلید ارسال",
    Theme: "تم",
    TightBorder: "حالت بدون حاشیه",
    SendPreviewBubble: {
      Title: "پیش‌نمایش حبابی",
      SubTitle: "پیش‌نمایش محتوای Markdown در یک حباب پیش‌نمایش",
    },
    AutoGenerateTitle: {
      Title: "تولید خودکار عنوان",
      SubTitle: "با توجه به محتوای گفتگو یک عنوان مناسب تولید می‌شود",
    },
    Sync: {
      CloudState: "داده‌های ابری",
      NotSyncYet: "هنوز همگام‌سازی نشده است",
      Success: "همگام‌سازی موفقیت‌آمیز بود",
      Fail: "خطا در همگام‌سازی",

      Config: {
        Modal: {
          Title: "پیکربندی همگام‌سازی ابری",
          Check: "بررسی دسترسی",
        },
        SyncType: {
          Title: "نوع همگام‌سازی",
          SubTitle: "سرویس دلخواه خود برای همگام‌سازی را انتخاب کنید",
        },
        Proxy: {
          Title: "فعال‌سازی پراکسی",
          SubTitle: "برای دورزدن محدودیت‌های CORS هنگام همگام‌سازی در مرورگر",
        },
        ProxyUrl: {
          Title: "آدرس پراکسی",
          SubTitle: "فقط برای پراکسی تعبیه‌شده در این پروژه کاربرد دارد",
        },

        WebDav: {
          Endpoint: "آدرس WebDAV",
          UserName: "نام کاربری",
          Password: "گذرواژه",
        },

        UpStash: {
          Endpoint: "پیوند UpStash Redis REST",
          UserName: "نام کاربری پشتیبان",
          Password: "کلید UpStash Redis REST",
        },
      },

      LocalState: "داده‌های محلی",
      Overview: (overview: any) => {
        return `${overview.chat} گفتگو، ${overview.message} پیام، ${overview.prompt} اعلان، ${overview.mask} ماسک`;
      },
      ImportFailed: "خطا در واردکردن فایل",
    },
    Mask: {
      Splash: {
        Title: "صفحهٔ شروع ماسک",
        SubTitle: "نمایش صفحهٔ شروع ماسک هنگام ایجاد گفتگوی جدید",
      },
      Builtin: {
        Title: "پنهان‌کردن ماسک‌های پیش‌فرض",
        SubTitle: "ماسک‌های داخلی را در فهرست مخفی کن",
      },
    },
    Prompt: {
      Disable: {
        Title: "غیرفعال‌کردن تکمیل خودکار اعلان",
        SubTitle: "برای فعال‌کردن تکمیل خودکار، ابتدا / را در ابتدای جعبه متن وارد کنید",
      },
      List: "فهرست اعلان‌های شخصی‌سازی‌شده",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} اعلان پیش‌فرض، ${custom} اعلان سفارشی`,
      Edit: "ویرایش",
      Modal: {
        Title: "فهرست اعلان‌ها",
        Add: "جدید",
        Search: "جستجوی اعلان",
      },
      EditModal: {
        Title: "ویرایش اعلان",
      },
    },
    HistoryCount: {
      Title: "تعداد پیام‌های تاریخی ضمیمه‌شده",
      SubTitle: "تعداد پیام‌های تاریخی که با هر درخواست ارسال می‌شود",
    },
    CompressThreshold: {
      Title: "آستانهٔ فشرده‌سازی طول پیام‌های تاریخی",
      SubTitle:
        "اگر طول پیام‌های تاریخی بیشتر از این مقدار شود، فشرده خواهند شد",
    },

    Usage: {
      Title: "بررسی موجودی",
      SubTitle(used: any, total: any) {
        return `مبلغ ${used} در این ماه استفاده شده است، سقف اشتراک ${total} دلار`;
      },
      IsChecking: "در حال بررسی...",
      Check: "بررسی مجدد",
      NoAccess: "برای مشاهدهٔ موجودی، کلید API یا کد دسترسی را وارد کنید",
    },

    Access: {
      SaasStart: {
        Title: "استفاده از NextChat AI",
        Label: "(به‌صرفه‌ترین راه‌حل)",
        SubTitle:
          "به‌صورت رسمی توسط NextChat پشتیبانی می‌شود، بدون نیاز به پیکربندی، و از جدیدترین مدل‌های بزرگ مانند OpenAI o1، GPT-4o و Claude-3.5 پشتیبانی می‌کند",
        ChatNow: "همین حالا گفتگو کن",
      },
      AccessCode: {
        Title: "کد دسترسی",
        SubTitle: "مدیر سیستم، دسترسی را رمزگذاری کرده است",
        Placeholder: "کد دسترسی را وارد کنید",
      },
      CustomEndpoint: {
        Title: "آدرس سفارشی",
        SubTitle: "آیا از سرویس Azure یا OpenAI سفارشی استفاده می‌کنید؟",
      },
      Provider: {
        Title: "ارائه‌دهندهٔ مدل",
        SubTitle: "می‌توانید بین ارائه‌دهندگان مختلف جابه‌جا شوید",
      },
      OpenAI: {
        ApiKey: {
          Title: "کلید API",
          SubTitle: "با واردکردن کلید OpenAI، محدودیت گذرواژه را دور بزنید",
          Placeholder: "کلید API برای OpenAI",
        },

        Endpoint: {
          Title: "آدرس پایانی",
          SubTitle: "باید با http(s):// شروع شود، در غیر این صورت مقدار پیش‌فرض است",
        },
      },
      Azure: {
        ApiKey: {
          Title: "کلید API",
          SubTitle: "با واردکردن کلید Azure، محدودیت گذرواژه را دور بزنید",
          Placeholder: "کلید API برای Azure",
        },

        Endpoint: {
          Title: "آدرس پایانی",
          SubTitle: "مثال:",
        },

        ApiVerion: {
          Title: "نسخهٔ API (azure api version)",
          SubTitle: "نسخهٔ موردنظر را انتخاب کنید",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "کلید API",
          SubTitle: "با واردکردن کلید Anthropic، محدودیت گذرواژه را دور بزنید",
          Placeholder: "کلید API برای Anthropic",
        },

        Endpoint: {
          Title: "آدرس پایانی",
          SubTitle: "مثال:",
        },

        ApiVerion: {
          Title: "نسخهٔ API (claude api version)",
          SubTitle: "نسخهٔ موردنظر API را انتخاب کنید",
        },
      },
      Google: {
        ApiKey: {
          Title: "کلید API",
          SubTitle: "کلید Google AI خود را از Google AI Studio دریافت کنید",
          Placeholder: "کلید API سرویس Google AI را وارد کنید",
        },

        Endpoint: {
          Title: "آدرس پایانی",
          SubTitle: "مثال:",
        },

        ApiVersion: {
          Title: "نسخهٔ API (مخصوص gemini-pro)",
          SubTitle: "نسخهٔ موردنظر API را انتخاب کنید",
        },
        GoogleSafetySettings: {
          Title: "سطح فیلتر ایمنی Google",
          SubTitle: "سطح حساسیت محتوا را مشخص کنید",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "کلید API",
          SubTitle: "استفاده از کلید اختصاصی Baidu",
          Placeholder: "کلید Baidu API",
        },
        SecretKey: {
          Title: "کلید محرمانه",
          SubTitle: "استفاده از کلید محرمانهٔ Baidu",
          Placeholder: "کلید محرمانهٔ Baidu",
        },
        Endpoint: {
          Title: "آدرس پایانی",
          SubTitle: "شخصی‌سازی پشتیبانی نمی‌شود، برای تنظیم به فایل .env مراجعه کنید",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "کلید API",
          SubTitle: "استفاده از کلید اختصاصی ByteDance",
          Placeholder: "کلید ByteDance API",
        },
        Endpoint: {
          Title: "آدرس پایانی",
          SubTitle: "مثال:",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "کلید API",
          SubTitle: "استفاده از کلید اختصاصی Alibaba Cloud",
          Placeholder: "کلید Alibaba Cloud API",
        },
        Endpoint: {
          Title: "آدرس پایانی",
          SubTitle: "مثال:",
        },
      },
      CustomModel: {
        Title: "نام مدل سفارشی",
        SubTitle: "نام مدل‌های سفارشی را با کاما انگلیسی جدا کنید",
      },
    },

    Model: "مدل",
    CompressModel: {
      Title: "مدل فشرده‌سازی",
      SubTitle: "مدلی که برای فشرده‌سازی تاریخچهٔ گفتگو استفاده می‌شود",
    },
    Temperature: {
      Title: "Temperature (درجهٔ تصادفی)",
      SubTitle: "هرچه مقدار بیشتر باشد، پاسخ‌ها تصادفی‌تر هستند",
    },
    TopP: {
      Title: "Top P (هستهٔ نمونه‌گیری)",
      SubTitle: "مشابه درجهٔ تصادفی، اما توصیه می‌شود همزمان با آن تغییر نکند",
    },
    MaxTokens: {
      Title: "حداکثر توکن‌ها در هر پاسخ (max_tokens)",
      SubTitle: "بیشترین تعداد توکن در یک تعامل",
    },
    PresencePenalty: {
      Title: "Presence Penalty (تنوع موضوع)",
      SubTitle:
        "هرچه مقدار بیشتر باشد، احتمال پرداختن به موضوعات جدید بیشتر می‌شود",
    },
    FrequencyPenalty: {
      Title: "Frequency Penalty (جریمهٔ تکرار)",
      SubTitle:
        "هرچه مقدار بیشتر باشد، احتمال جلوگیری از تکرار کلمات بالاتر می‌رود",
    },
  },
  Store: {
    DefaultTopic: "گفتگوی جدید",
    BotHello: "چطور می‌توانم کمکتان کنم؟",
    Error: "خطایی رخ داد، لطفاً بعداً دوباره تلاش کنید",
    Prompt: {
      History: (content: string) =>
        "این خلاصه‌ای از مکالمات قبلی است که می‌تواند به عنوان نقطهٔ شروع استفاده شود: " +
        content,
      Topic:
        "با استفاده از چهار تا پنج کلمه، یک خلاصهٔ کوتاه از این جمله ارائه بده؛ بدون توضیح اضافی، بدون علائم نگارشی، بدون کلمات احساسی یا برجسته، اگر موضوعی وجود ندارد، فقط 'گفتگوی عمومی' را برگردان",
      Summarize:
        "محتوای گفتگو را به طور خلاصه بیان کن، حداکثر در ۲۰۰ کلمه، تا در ادامه به عنوان زمینه استفاده شود",
    },
  },
  Copy: {
    Success: "در کلیپ‌بورد کپی شد",
    Failed: "کپی نشد، لطفاً اجازهٔ دسترسی به کلیپ‌بورد را بررسی کنید",
  },
  Download: {
    Success: "فایل با موفقیت در پوشهٔ شما ذخیره شد.",
    Failed: "دانلود ناموفق بود.",
  },
  Context: {
    Toast: (x: any) => `شامل ${x} اعلان سفارشی است`,
    Edit: "تنظیمات گفتگوی جاری",
    Add: "افزودن گفتگو",
    Clear: "زمینه پاک شد",
    Revert: "بازگردانی زمینه",
  },
  Plugin: {
    Name: "افزونه‌ها",
  },
  FineTuned: {
    Sysmessage: "شما دستیار هستید",
  },
  SearchChat: {
    Name: "جستجو",
    Page: {
      Title: "جستجو در سابقهٔ گفتگو",
      Search: "کلمهٔ جستجو را وارد کنید",
      NoResult: "هیچ نتیجه‌ای یافت نشد",
      NoData: "داده‌ای موجود نیست",
      Loading: "در حال بارگذاری",

      SubTitle: (count: number) => `مجموع ${count} نتیجه یافت شد`,
    },
    Item: {
      View: "نمایش",
    },
  },
  Mask: {
    Name: "ماسک",
    Page: {
      Title: "ماسک‌های نقش سفارشی",
      SubTitle: (count: number) => `${count} تعریف نقش سفارشی`,
      Search: "جستجوی ماسک نقش",
      Create: "ایجاد ماسک جدید",
    },
    Item: {
      Info: (count: number) => `شامل ${count} اعلان سفارشی است`,
      Chat: "گفتگو",
      View: "مشاهده",
      Edit: "ویرایش",
      Delete: "حذف",
      DeleteConfirm: "حذف تأیید شود؟",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `ویرایش ماسک سفارشی ${readonly ? " (فقط خواندنی)" : ""}`,
      Download: "دانلود ماسک سفارشی",
      Clone: "کلون کردن ماسک",
    },
    Config: {
      Avatar: "تصویر نقش",
      Name: "نام نقش",
      Sync: {
        Title: "استفاده از تنظیمات کلی",
        SubTitle: "آیا گفتگوی جاری از تنظیمات کلی مدل استفاده کند؟",
        Confirm:
          "این کار تنظیمات سفارشی گفتگوی فعلی را با تنظیمات کلی جایگزین می‌کند. مطمئنید که می‌خواهید فعالش کنید؟",
      },
      HideContext: {
        Title: "مخفی کردن اعلان‌های سفارشی",
        SubTitle: "پس از مخفی کردن، اعلان‌های سفارشی در رابط گفتگو نشان داده نمی‌شود",
      },
      Share: {
        Title: "اشتراک این ماسک",
        SubTitle: "لینک مستقیم به این ماسک بسازید",
        Action: "کپی لینک",
      },
    },
  },
  NewChat: {
    Return: "بازگشت",
    Skip: "همین حالا شروع کن",
    NotShow: "دیگر نمایش داده نشود",
    ConfirmNoShow:
      "آیا از غیرفعال کردن نمایش این صفحه مطمئنید؟ در صورت نیاز، می‌توانید بعداً در تنظیمات مجدداً فعالش کنید.",
    Title: "یک ماسک انتخاب کنید",
    SubTitle: "همین حالا شروع کنید و با ایده‌های پس‌زمینهٔ ماسک گفتگو کنید",
    More: "نمایش همه",
  },

  URLCommand: {
    Code: "یک کد دسترسی در لینک شناسایی شد. مایلید به‌صورت خودکار درج شود؟",
    Settings: "تنظیمات از پیش آماده در لینک شناسایی شد. مایلید آنها را اعمال کنید؟",
  },

  UI: {
    Confirm: "تأیید",
    Cancel: "لغو",
    Close: "بستن",
    Create: "ایجاد",
    Edit: "ویرایش",
    Export: "خروجی",
    Import: "ورودی",
    Sync: "همگام‌سازی",
    Config: "پیکربندی",
  },
  Exporter: {
    Description: {
      Title: "فقط پیام‌هایی که پس از پاک‌شدن زمینه ارسال می‌شوند نمایش داده خواهند شد",
    },
    Model: "مدل",
    Messages: "پیام‌ها",
    Topic: "موضوع",
    Time: "زمان",
  },
};

export default fa;
