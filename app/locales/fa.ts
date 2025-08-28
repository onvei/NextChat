import { SubmitKey } from "../store/config";
import type { PartialLocaleType } from "./index";
import { getClientConfig } from "../config/client";
import { SAAS_CHAT_UTM_URL } from "@/app/constant";

const isApp = !!getClientConfig()?.isApp;
const fa: PartialLocaleType = {
  WIP: "به زودی...",
  Error: {
    Unauthorized: isApp
      ? `😆 اوه، مشکلی پیش آمده، نگران نباش:
     \\ 1️⃣ تازه‌ای؟ [برای شروع چت فوری کلیک کن 🚀](${SAAS_CHAT_UTM_URL})
     \\ 2️⃣ می‌خواهی از منابع OpenAI خودت استفاده کنی؟ [اینجا کلیک کن](/#/settings) تا تنظیمات را تغییر دهی ⚙️`
      : `😆 اوه، مشکلی پیش آمده، بیا درستش کنیم:
     \ 1️⃣ تازه‌ای؟ [برای شروع چت فوری کلیک کن 🚀](${SAAS_CHAT_UTM_URL})
     \ 2️⃣ از استقرار خصوصی استفاده می‌کنی؟ [اینجا کلیک کن](/#/auth) تا کلیدت را وارد کنی 🔑
     \ 3️⃣ می‌خواهی از منابع OpenAI خودت استفاده کنی؟ [اینجا کلیک کن](/#/settings) تا تنظیمات را تغییر دهی ⚙️
     `,
  },
  Auth: {
    Return: "بازگشت",
    Title: "نیاز به کد دسترسی",
    Tips: "لطفاً کد دسترسی را در زیر وارد کنید",
    SubTips: "یا کلید API OpenAI یا Google خود را وارد کنید",
    Input: "کد دسترسی",
    Confirm: "تأیید",
    Later: "بعداً",
    SaasTips: "پیچیده است، همین حالا استفاده کن",
    TopTips:
      "🥳 تبلیغ آغاز به کار NextChat AI: فوری جدیدترین مدل‌ها مانند OpenAI o1، GPT-4o، Claude-3.5 را باز کن!",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} پیام`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} پیام`,
    EditMessage: {
      Title: "ویرایش همه پیام‌ها",
      Topic: {
        Title: "موضوع",
        SubTitle: "تغییر موضوع فعلی",
      },
    },
    Actions: {
      ChatList: "رفتن به لیست گفتگوها",
      CompressedHistory: "پرومپت حافظه تاریخچه فشرده",
      Export: "خروجی همه پیام‌ها به صورت Markdown",
      Copy: "کپی",
      Stop: "توقف",
      Retry: "تلاش مجدد",
      Pin: "سنجاق کردن",
      PinToastContent: "۱ پیام به پرومپت‌های متنی سنجاق شد",
      PinToastAction: "مشاهده",
      Delete: "حذف",
      Edit: "ویرایش",
      FullScreen: "تمام‌صفحه",
      RefreshTitle: "تازه‌سازی عنوان",
      RefreshToast: "درخواست تازه‌سازی عنوان ارسال شد",
      Speech: "پخش",
      StopSpeech: "توقف",
    },
    Commands: {
      new: "شروع گفتگوی جدید",
      newm: "شروع گفتگوی جدید با ماسک",
      next: "گفتگوی بعدی",
      prev: "گفتگوی قبلی",
      clear: "پاک کردن زمینه",
      fork: "کپی گفتگو",
      del: "حذف گفتگو",
    },
    InputActions: {
      Stop: "توقف",
      ToBottom: "رفتن به آخرین",
      Theme: {
        auto: "خودکار",
        light: "تم روشن",
        dark: "تم تیره",
      },
      Prompt: "پرومپت‌ها",
      Masks: "ماسک‌ها",
      Clear: "پاک کردن زمینه",
      Settings: "تنظیمات",
      UploadImage: "بارگذاری تصویر",
    },
    Rename: "تغییر نام گفتگو",
    Typing: "در حال تایپ…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} برای ارسال`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", شیفت + اینتر برای رفتن به خط بعد";
      }
      return (
        inputHints + ", / برای جستجوی پرومپت‌ها، : برای استفاده از دستورات"
      );
    },
    Send: "ارسال",
    StartSpeak: "شروع مکالمه",
    StopSpeak: "پایان مکالمه",
    Config: {
      Reset: "بازنشانی به پیش‌فرض",
      SaveAs: "ذخیره به عنوان ماسک",
    },
    IsContext: "پرومپت متنی",
    ShortcutKey: {
      Title: "میانبرهای صفحه‌کلید",
      newChat: "باز کردن گفتگوی جدید",
      focusInput: "تمرکز روی ورودی",
      copyLastMessage: "کپی آخرین پاسخ",
      copyLastCode: "کپی آخرین بلوک کد",
      showShortcutKey: "نمایش میانبرها",
      clearContext: "پاک کردن زمینه",
    },
  },
  Export: {
    Title: "خروجی پیام‌ها",
    Copy: "کپی همه",
    Download: "دانلود",
    MessageFromYou: "پیام از شما",
    MessageFromChatGPT: "پیام از ChatGPT",
    Share: "اشتراک‌گذاری در ShareGPT",
    Format: {
      Title: "فرمت خروجی",
      SubTitle: "Markdown یا تصویر PNG",
    },
    IncludeContext: {
      Title: "شامل کردن زمینه",
      SubTitle: "پرومپت‌های زمینه‌ای ماسک صادر شود یا نه",
    },
    Steps: {
      Select: "انتخاب",
      Preview: "پیش‌نمایش",
    },
    Image: {
      Toast: "در حال گرفتن تصویر...",
      Modal: "برای ذخیره تصویر کلیک راست یا لمس طولانی کنید",
    },
    Artifacts: {
      Title: "اشتراک‌گذاری آثار",
      Error: "خطا در اشتراک‌گذاری",
    },
  },
  Select: {
    Search: "جستجو",
    All: "انتخاب همه",
    Latest: "انتخاب آخرین",
    Clear: "پاک کردن",
  },
  Memory: {
    Title: "پرومپت حافظه",
    EmptyContent: "هنوز چیزی نیست.",
    Send: "ارسال حافظه",
    Copy: "کپی حافظه",
    Reset: "بازنشانی جلسه",
    ResetConfirm:
      "بازنشانی، تاریخچه گفتگو و حافظه قبلی را پاک می‌کند. مطمئنید؟",
  },
  Home: {
    NewChat: "گفتگوی جدید",
    DeleteChat: "حذف گفتگوی انتخاب‌شده تأیید شود؟",
    DeleteToast: "گفتگو حذف شد",
    Revert: "بازگردانی",
  },
  Settings: {
    Title: "تنظیمات",
    SubTitle: "تمام تنظیمات",
    ShowPassword: "نمایش گذرواژه",
    Danger: {
      Reset: {
        Title: "بازنشانی همه تنظیمات",
        SubTitle: "بازنشانی تمام گزینه‌ها به پیش‌فرض",
        Action: "بازنشانی",
        Confirm: "همه تنظیمات به حالت پیش‌فرض بازگردانده شوند؟",
      },
      Clear: {
        Title: "پاک کردن همه داده‌ها",
        SubTitle: "پاک کردن همه پیام‌ها و تنظیمات",
        Action: "پاک کردن",
        Confirm: "همه پیام‌ها و تنظیمات پاک شوند؟",
      },
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "همه زبان‌ها",
    },
    Avatar: "آواتار",
    FontSize: {
      Title: "اندازه فونت",
      SubTitle: "تنظیم اندازه فونت محتوای گفتگو",
    },
    FontFamily: {
      Title: "خانواده فونت گفتگو",
      SubTitle:
        "خانواده فونت محتوای گفتگو، برای اعمال فونت پیش‌فرض خالی بگذارید",
      Placeholder: "نام فونت",
    },
    InjectSystemPrompts: {
      Title: "تزریق پرومپت‌های سیستم",
      SubTitle: "تزریق یک پرومپت سیستم جهانی برای هر درخواست",
    },
    InputTemplate: {
      Title: "قالب ورودی",
      SubTitle: "جدیدترین پیام در این قالب قرار می‌گیرد",
    },

    Update: {
      Version: (x: string) => `Version: ${x}`,
      IsLatest: "Latest version",
      CheckUpdate: "Check Update",
      IsChecking: "Checking update...",
      FoundUpdate: (x: string) => `Found new version: ${x}`,
      GoToUpdate: "Update",
      Success: "Update Successful.",
      Failed: "Update Failed.",
    },
    SendKey: "Send Key",
    Theme: "Theme",
    TightBorder: "Tight Border",
    SendPreviewBubble: {
      Title: "Send Preview Bubble",
      SubTitle: "Preview markdown in bubble",
    },
    AutoGenerateTitle: {
      Title: "Auto Generate Title",
      SubTitle: "Generate a suitable title based on the conversation content",
    },
    Sync: {
      CloudState: "Last Update",
      NotSyncYet: "Not sync yet",
      Success: "Sync Success",
      Fail: "Sync Fail",

      Config: {
        Modal: {
          Title: "Config Sync",
          Check: "Check Connection",
        },
        SyncType: {
          Title: "Sync Type",
          SubTitle: "Choose your favorite sync service",
        },
        Proxy: {
          Title: "Enable CORS Proxy",
          SubTitle: "Enable a proxy to avoid cross-origin restrictions",
        },
        ProxyUrl: {
          Title: "Proxy Endpoint",
          SubTitle:
            "Only applicable to the built-in CORS proxy for this project",
        },

        WebDav: {
          Endpoint: "WebDAV Endpoint",
          UserName: "User Name",
          Password: "Password",
        },

        UpStash: {
          Endpoint: "UpStash Redis REST Url",
          UserName: "Backup Name",
          Password: "UpStash Redis REST Token",
        },
      },

      LocalState: "Local Data",
      Overview: (overview: any) => {
        return `${overview.chat} chats，${overview.message} messages，${overview.prompt} prompts，${overview.mask} masks`;
      },
      ImportFailed: "Failed to import from file",
    },
    Mask: {
      Splash: {
        Title: "Mask Splash Screen",
        SubTitle: "Show a mask splash screen before starting new chat",
      },
      Builtin: {
        Title: "Hide Builtin Masks",
        SubTitle: "Hide builtin masks in mask list",
      },
    },
    Prompt: {
      Disable: {
        Title: "Disable auto-completion",
        SubTitle: "Input / to trigger auto-completion",
      },
      List: "Prompt List",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} built-in, ${custom} user-defined`,
      Edit: "Edit",
      Modal: {
        Title: "Prompt List",
        Add: "Add One",
        Search: "Search Prompts",
      },
      EditModal: {
        Title: "Edit Prompt",
      },
    },
    HistoryCount: {
      Title: "Attached Messages Count",
      SubTitle: "Number of sent messages attached per request",
    },
    CompressThreshold: {
      Title: "History Compression Threshold",
      SubTitle:
        "Will compress if uncompressed messages length exceeds the value",
    },

    Usage: {
      Title: "Account Balance",
      SubTitle(used: any, total: any) {
        return `Used this month $${used}, subscription $${total}`;
      },
      IsChecking: "Checking...",
      Check: "Check",
      NoAccess: "Enter API Key to check balance",
    },
    Access: {
      SaasStart: {
        Title: "Use NextChat AI",
        Label: " (Most Cost-Effective Option)",
        SubTitle:
          "Maintained by NextChat, zero setup needed, unlock OpenAI o1, GPT-4o," +
          " Claude-3.5 and more",
        ChatNow: "Start Now",
      },
      AccessCode: {
        Title: "Access Code",
        SubTitle: "Access control Enabled",
        Placeholder: "Enter Code",
      },
      CustomEndpoint: {
        Title: "Custom Endpoint",
        SubTitle: "Use custom Azure or OpenAI service",
      },
      Provider: {
        Title: "Model Provider",
        SubTitle: "Select Azure or OpenAI",
      },
      OpenAI: {
        ApiKey: {
          Title: "OpenAI API Key",
          SubTitle: "User custom OpenAI Api Key",
          Placeholder: "sk-xxx",
        },

        Endpoint: {
          Title: "OpenAI Endpoint",
          SubTitle: "Must start with http(s):// or use /api/openai as default",
        },
      },
      Azure: {
        ApiKey: {
          Title: "Azure Api Key",
          SubTitle: "Check your api key from Azure console",
          Placeholder: "Azure Api Key",
        },

        Endpoint: {
          Title: "Azure Endpoint",
          SubTitle: "Example: ",
        },

        ApiVerion: {
          Title: "Azure Api Version",
          SubTitle: "Check your api version from azure console",
        },
      },
      Anthropic: {
        ApiKey: {
          Title: "Anthropic API Key",
          SubTitle:
            "Use a custom Anthropic Key to bypass password access restrictions",
          Placeholder: "Anthropic API Key",
        },

        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },

        ApiVerion: {
          Title: "API Version (claude api version)",
          SubTitle: "Select and input a specific API version",
        },
      },
      Baidu: {
        ApiKey: {
          Title: "Baidu API Key",
          SubTitle: "Use a custom Baidu API Key",
          Placeholder: "Baidu API Key",
        },
        SecretKey: {
          Title: "Baidu Secret Key",
          SubTitle: "Use a custom Baidu Secret Key",
          Placeholder: "Baidu Secret Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "not supported, configure in .env",
        },
      },
      Tencent: {
        ApiKey: {
          Title: "Tencent API Key",
          SubTitle: "Use a custom Tencent API Key",
          Placeholder: "Tencent API Key",
        },
        SecretKey: {
          Title: "Tencent Secret Key",
          SubTitle: "Use a custom Tencent Secret Key",
          Placeholder: "Tencent Secret Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "not supported, configure in .env",
        },
      },
      ByteDance: {
        ApiKey: {
          Title: "ByteDance API Key",
          SubTitle: "Use a custom ByteDance API Key",
          Placeholder: "ByteDance API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Alibaba: {
        ApiKey: {
          Title: "Alibaba API Key",
          SubTitle: "Use a custom Alibaba Cloud API Key",
          Placeholder: "Alibaba Cloud API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Moonshot: {
        ApiKey: {
          Title: "Moonshot API Key",
          SubTitle: "Use a custom Moonshot API Key",
          Placeholder: "Moonshot API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      DeepSeek: {
        ApiKey: {
          Title: "DeepSeek API Key",
          SubTitle: "Use a custom DeepSeek API Key",
          Placeholder: "DeepSeek API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      XAI: {
        ApiKey: {
          Title: "XAI API Key",
          SubTitle: "Use a custom XAI API Key",
          Placeholder: "XAI API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      ChatGLM: {
        ApiKey: {
          Title: "ChatGLM API Key",
          SubTitle: "Use a custom ChatGLM API Key",
          Placeholder: "ChatGLM API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Stability: {
        ApiKey: {
          Title: "Stability API Key",
          SubTitle: "Use a custom Stability API Key",
          Placeholder: "Stability API Key",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      Iflytek: {
        ApiKey: {
          Title: "Iflytek API Key",
          SubTitle: "Use a Iflytek API Key",
          Placeholder: "Iflytek API Key",
        },
        ApiSecret: {
          Title: "Iflytek API Secret",
          SubTitle: "Use a Iflytek API Secret",
          Placeholder: "Iflytek API Secret",
        },
        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },
      },
      CustomModel: {
        Title: "Custom Models",
        SubTitle: "Custom model options, seperated by comma",
      },
      Google: {
        ApiKey: {
          Title: "API Key",
          SubTitle: "Obtain your API Key from Google AI",
          Placeholder: "Google AI API Key",
        },

        Endpoint: {
          Title: "Endpoint Address",
          SubTitle: "Example: ",
        },

        ApiVersion: {
          Title: "API Version (specific to gemini-pro)",
          SubTitle: "Select a specific API version",
        },
        GoogleSafetySettings: {
          Title: "Google Safety Settings",
          SubTitle: "Select a safety filtering level",
        },
      },
    },

    Model: "Model",
    CompressModel: {
      Title: "Summary Model",
      SubTitle: "Model used to compress history and generate title",
    },
    Temperature: {
      Title: "Temperature",
      SubTitle: "A larger value makes the more random output",
    },
    TopP: {
      Title: "Top P",
      SubTitle: "Do not alter this value together with temperature",
    },
    MaxTokens: {
      Title: "Max Tokens",
      SubTitle: "Maximum length of input tokens and generated tokens",
    },
    PresencePenalty: {
      Title: "Presence Penalty",
      SubTitle:
        "A larger value increases the likelihood to talk about new topics",
    },
    FrequencyPenalty: {
      Title: "Frequency Penalty",
      SubTitle:
        "A larger value decreasing the likelihood to repeat the same line",
    },
    TTS: {
      Enable: {
        Title: "Enable TTS",
        SubTitle: "Enable text-to-speech service",
      },
      Autoplay: {
        Title: "Enable Autoplay",
        SubTitle:
          "Automatically generate speech and play, you need to enable the text-to-speech switch first",
      },
      Model: "Model",
      Voice: {
        Title: "Voice",
        SubTitle: "The voice to use when generating the audio",
      },
      Speed: {
        Title: "Speed",
        SubTitle: "The speed of the generated audio",
      },
      Engine: "TTS Engine",
    },
    Realtime: {
      Enable: {
        Title: "Realtime Chat",
        SubTitle: "Enable realtime chat feature",
      },
      Provider: {
        Title: "Model Provider",
        SubTitle: "Switch between different providers",
      },
      Model: {
        Title: "Model",
        SubTitle: "Select a model",
      },
      ApiKey: {
        Title: "API Key",
        SubTitle: "API Key",
        Placeholder: "API Key",
      },
      Azure: {
        Endpoint: {
          Title: "Endpoint",
          SubTitle: "Endpoint",
        },
        Deployment: {
          Title: "Deployment Name",
          SubTitle: "Deployment Name",
        },
      },
      Temperature: {
        Title: "Randomness (temperature)",
        SubTitle: "Higher values result in more random responses",
      },
    },
  },
  Store: {
    DefaultTopic: "New Conversation",
    BotHello: "Hello! How can I assist you today?",
    Error: "Something went wrong, please try again later.",
    Prompt: {
      History: (content: string) =>
        "This is a summary of the chat history as a recap: " + content,
      Topic:
        "Please generate a four to five word title summarizing our conversation without any lead-in, punctuation, quotation marks, periods, symbols, bold text, or additional text. Remove enclosing quotation marks.",
      Summarize:
        "Summarize the discussion briefly in 200 words or less to use as a prompt for future context.",
    },
  },
  Copy: {
    Success: "Copied to clipboard",
    Failed: "Copy failed, please grant permission to access clipboard",
  },
  Download: {
    Success: "Content downloaded to your directory.",
    Failed: "Download failed.",
  },
  Context: {
    Toast: (x: any) => `With ${x} contextual prompts`,
    Edit: "Current Chat Settings",
    Add: "Add a Prompt",
    Clear: "Context Cleared",
    Revert: "Revert",
  },
  Discovery: {
    Name: "Discovery",
  },
  Mcp: {
    Name: "MCP",
  },
  FineTuned: {
    Sysmessage: "You are an assistant that",
  },
  SearchChat: {
    Name: "Search",
    Page: {
      Title: "Search Chat History",
      Search: "Enter search query to search chat history",
      NoResult: "No results found",
      NoData: "No data",
      Loading: "Loading...",

      SubTitle: (count: number) => `Found ${count} results`,
    },
    Item: {
      View: "View",
    },
  },
  Plugin: {
    Name: "Plugin",
    Page: {
      Title: "Plugins",
      SubTitle: (count: number) => `${count} plugins`,
      Search: "Search Plugin",
      Create: "Create",
      Find: "You can find awesome plugins on github: ",
    },
    Item: {
      Info: (count: number) => `${count} method`,
      View: "View",
      Edit: "Edit",
      Delete: "Delete",
      DeleteConfirm: "Confirm to delete?",
    },
    Auth: {
      None: "None",
      Basic: "Basic",
      Bearer: "Bearer",
      Custom: "Custom",
      CustomHeader: "Parameter Name",
      Token: "Token",
      Proxy: "Using Proxy",
      ProxyDescription: "Using proxies to solve CORS error",
      Location: "Location",
      LocationHeader: "Header",
      LocationQuery: "Query",
      LocationBody: "Body",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Plugin ${readonly ? "(readonly)" : ""}`,
      Download: "Download",
      Auth: "Authentication Type",
      Content: "OpenAPI Schema",
      Load: "Load From URL",
      Method: "Method",
      Error: "OpenAPI Schema Error",
    },
  },
  Mask: {
    Name: "Mask",
    Page: {
      Title: "Prompt Template",
      SubTitle: (count: number) => `${count} prompt templates`,
      Search: "Search Templates",
      Create: "Create",
    },
    Item: {
      Info: (count: number) => `${count} prompts`,
      Chat: "Chat",
      View: "View",
      Edit: "Edit",
      Delete: "Delete",
      DeleteConfirm: "Confirm to delete?",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `Edit Prompt Template ${readonly ? "(readonly)" : ""}`,
      Download: "Download",
      Clone: "Clone",
    },
    Config: {
      Avatar: "Bot Avatar",
      Name: "Bot Name",
      Sync: {
        Title: "Use Global Config",
        SubTitle: "Use global config in this chat",
        Confirm: "Confirm to override custom config with global config?",
      },
      HideContext: {
        Title: "Hide Context Prompts",
        SubTitle: "Do not show in-context prompts in chat",
      },
      Artifacts: {
        Title: "Enable Artifacts",
        SubTitle: "Can render HTML page when enable artifacts.",
      },
      CodeFold: {
        Title: "Enable CodeFold",
        SubTitle:
          "Automatically collapse/expand overly long code blocks when CodeFold is enabled",
      },
      Share: {
        Title: "Share This Mask",
        SubTitle: "Generate a link to this mask",
        Action: "Copy Link",
      },
    },
  },
  NewChat: {
    Return: "Return",
    Skip: "Just Start",
    Title: "Pick a Mask",
    SubTitle: "Chat with the Soul behind the Mask",
    More: "Find More",
    NotShow: "Never Show Again",
    ConfirmNoShow: "Confirm to disable？You can enable it in settings later.",
  },

  UI: {
    Confirm: "Confirm",
    Cancel: "Cancel",
    Close: "Close",
    Create: "Create",
    Edit: "Edit",
    Export: "Export",
    Import: "Import",
    Sync: "Sync",
    Config: "Config",
  },
  Exporter: {
    Description: {
      Title: "Only messages after clearing the context will be displayed",
    },
    Model: "Model",
    Messages: "Messages",
    Topic: "Topic",
    Time: "Time",
  },
  URLCommand: {
    Code: "Detected access code from url, confirm to apply? ",
    Settings: "Detected settings from url, confirm to apply?",
  },
  SdPanel: {
    Prompt: "Prompt",
    NegativePrompt: "Negative Prompt",
    PleaseInput: (name: string) => `Please input ${name}`,
    AspectRatio: "Aspect Ratio",
    ImageStyle: "Image Style",
    OutFormat: "Output Format",
    AIModel: "AI Model",
    ModelVersion: "Model Version",
    Submit: "Submit",
    ParamIsRequired: (name: string) => `${name} is required`,
    Styles: {
      D3Model: "3d-model",
      AnalogFilm: "analog-film",
      Anime: "anime",
      Cinematic: "cinematic",
      ComicBook: "comic-book",
      DigitalArt: "digital-art",
      Enhance: "enhance",
      FantasyArt: "fantasy-art",
      Isometric: "isometric",
      LineArt: "line-art",
      LowPoly: "low-poly",
      ModelingCompound: "modeling-compound",
      NeonPunk: "neon-punk",
      Origami: "origami",
      Photographic: "photographic",
      PixelArt: "pixel-art",
      TileTexture: "tile-texture",
    },
  },
  Sd: {
    SubTitle: (count: number) => `${count} images`,
    Actions: {
      Params: "See Params",
      Copy: "Copy Prompt",
      Delete: "Delete",
      Retry: "Retry",
      ReturnHome: "Return Home",
      History: "History",
    },
    EmptyRecord: "No images yet",
    Status: {
      Name: "Status",
      Success: "Success",
      Error: "Error",
      Wait: "Waiting",
      Running: "Running",
    },
    Danger: {
      Delete: "Confirm to delete?",
    },
    GenerateParams: "Generate Params",
    Detail: "Detail",
  },
};

export default fa;
