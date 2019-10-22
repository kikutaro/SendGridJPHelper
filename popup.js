chrome.tabs.query({"active":true, "lastFocusedWindow":true}, function(tabs) {
    var url_dashboard = "https://app.sendgrid.com/";
    var url_campaings = "https://sendgrid.com/marketing_campaigns/ui/";
    var url_dynamic_template = "https://sendgrid.com/dynamic_templates";
    var url_legacy_template = "https://sendgrid.com/templates";
    var url_stats ="https://app.sendgrid.com/statistics/";
    var url_activity = "https://app.sendgrid.com/email_activity";
    var url_suppressions = "https://app.sendgrid.com/suppressions/";
    var url_account = "https://app.sendgrid.com/account/details";
    var url_settings = "https://app.sendgrid.com/settings/";

    //パラメータはカット
    var url = tabs[0].url.split('?')[0];
    if(url === url_dashboard) {
        dashboard();
    }else if(url.startsWith(url_campaings)) {
        marketing_campaings(url.replace(url_campaings, ""));
    }else if(url === url_dynamic_template) {
        dynamic_template();
    }else if(url === url_legacy_template) {
        legacy_template();
    }else if(url.startsWith(url_stats)) {
        stats(url.replace(url_stats, ""));
    }else if(url === url_activity) {
        activity();
    }else if(url.startsWith(url_suppressions)) {
        suppressions(url.replace(url_suppressions, ""));
    }else if(url.startsWith(url_settings)) {
        settings(url.replace(url_settings, ""));
    }
});

function dashboard() { 
    var docArr = [
        {
            "name":"Dashboard",
            "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/dashboard.html"
        }
    ];
    var faqArr = [
        {
            "name":"ダッシュボード（操作画面）は日本語に対応していますか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000068462"
        },
        {
            "name":"ダッシュボードにログインしたらメールアドレスの確認を求められました。どうすればよいですか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000074722"
        },
        {
            "name":"IP Access Managementの設定を間違えてしまい、SendGridへアクセスできなくなってしまいました。設定を解除してもらえますか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000021161"
        }
    ];

    createList("doc", docArr);
    createList("faq", faqArr);
}

function marketing_campaings(sub) {
    switch(sub) {
        case "tour":
            var docArr = [
                {
                    "name":"はじめに",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/B_Marketing_Mail/marketing_campaigns0.html"
                }
            ];
            var faqArr = [
                {
                    "name":"マーケティングキャンペーン機能とはどのような機能ですか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000015701"
                },
                {
                    "name":"マーケティングキャンペーン機能にはどのような制限事項がありますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000016082"
                },
                {
                    "name":"マーケティングキャンペーン機能利用料金の計算方法について教えてください。",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000018142"
                }
            ];
            break;
        case "overview":
            var docArr = [
                {
                    "name":"概要",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/overview.html"
                },
                {
                    "name":"はじめに",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/B_Marketing_Mail/marketing_campaigns0.html"
                }
            ];
            var faqArr = [
                {}
            ];
            break;
        case "campaigns":
            var docArr = [
                {
                    "name":"キャンペーンの作成",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/B_Marketing_Mail/marketing_campaigns4.html"
                },
                {
                    "name":"キャンペーンの送信",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/getting_started.html"
                },
                {
                    "name":"Design Editor",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/design_editor.html"
                },
                {
                    "name":"Code Editor",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/code_editor.html"
                },
                {
                    "name":"レスポンシブメールを送る",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/B_Marketing_Mail/marketing_campaigns5.html"
                },
                {
                    "name":"セグメント配信を行う",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/B_Marketing_Mail/marketing_campaigns6.html"
                },
                {
                    "name":"A/Bテスト",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/a_b_testing.html"
                },
                {
                    "name":"Campaign Statistics",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/campaign_stats.html"
                }
            ];
            var faqArr = [
                {
                    "name":"送信したメールの内容を後から参照できますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/360000002602"
                },
                {
                    "name":"メール本文内のURLが勝手に置換されてしまいます。解除できますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/206253421"
                }
            ];
            break;
        case "contacts":
            var docArr = [
                {
                    "name":"宛先のアップロード",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/B_Marketing_Mail/marketing_campaigns2.html"
                },
                {
                    "name":"Contacts",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/contacts.html"
                },
                {
                    "name":"宛先リストの作成",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/Managing_Contacts/building_your_contact_list.html"
                },
                {
                    "name":"宛先の追加",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/Managing_Contacts/adding_contacts.html"
                },
                {
                    "name":"CSVファイルのフォーマット",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/Managing_Contacts/formating_a_CSV.html"
                },
                {
                    "name":"宛先リストの管理",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/Managing_Contacts/managing_contact_list.html"
                },
                {
                    "name":"Contactsのセグメント化",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/Managing_Contacts/segmenting_your_contacts.html"
                },
                {
                    "name":"セグメント配信を行う",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/B_Marketing_Mail/marketing_campaigns6.html"
                },
                {
                    "name":"セグメントの作成とエクスポート",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/lists.html"
                }
            ];
            var faqArr = [
                {
                    "name":"アップロードした宛先リストが文字化けしてしまいます。どうすればよいでしょうか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203392235"
                },
                {
                    "name":"マーケティングキャンペーン機能利用料金の計算方法について教えてください。",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000018142"
                },
                {
                    "name":"マーケティングキャンペーン機能で宛先リストをアップロードしようとしたら、アラートが表示されました。プランをアップグレードしなければならないのでしょうか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/360000132942"
                },
                {
                    "name":"マーケティングキャンペーン機能で、アップロードしたCSVファイルの宛先数とContactsの宛先数が一致しないのはなぜですか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/360000562261"
                }
            ];
            break;
        case "custom_fields":
            var docArr = [
                {
                    "name":"Custom Fields",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/custom_fields.html"
                }
            ];
            var faqArr = [
                {}
            ];
            break;
        case "marketing_templates":
            var docArr = [
                {
                    "name":"Marketing Templates",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/templates.html"
                },
                {
                    "name":"Design Editor",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/design_editor.html"
                },
                {
                    "name":"Code Editor",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/code_editor.html"
                }
            ];
            var faqArr = [
                {}
            ];
            break;
        case "senders":
            var docArr = [
                {
                    "name":"差出人情報の作成",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/B_Marketing_Mail/marketing_campaigns1.html"
                },
                {
                    "name":"Senders",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/senders.html"
                }
            ];
            var faqArr = [
                {
                    "name":"差出人情報(Sender)の認証が完了しません。どうすればよいでしょうか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/360000158641"
                }
            ];
            break;
        case "notifications":
            var docArr = [
                {
                    "name":"Notifications",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Marketing_Campaigns/notifications.html"
                }
            ];
            var faqArr = [
                {}
            ];
            break;
        case "unsubscribe-groups":
            var docArr = [
                {
                    "name":"配信停止グループの設定",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/B_Marketing_Mail/marketing_campaigns3.html"
                }
            ];
            var faqArr = [
                {}
            ];
            break;
            
    }
    
    createList("doc", docArr);
    createList("faq", faqArr);
}

function dynamic_template() {
    var docArr = [
        {
            "name":"テンプレートを適用して送信する(Dynamic Transactional Template編)",
            "url":"https://sendgrid.kke.co.jp/docs/Tutorials/A_Transaction_Mail/using_dynamic_templates.html"
        }
    ];
    var faqArr = [
        {}
    ];

    createList("doc", docArr);
    createList("faq", faqArr);
}

function legacy_template() {
    var docArr = [
        {
            "name":"テンプレートを適用して送信する(Legacy Transactional Template編)",
            "url":"https://sendgrid.kke.co.jp/docs/Tutorials/A_Transaction_Mail/using_templates.html"
        }
    ];
    var faqArr = [
        {}
    ];

    createList("doc", docArr);
    createList("faq", faqArr);
}

function stats(sub) {
    switch(sub) {
        case "":
            var docArr = [
                {
                    "name":"Statsの概要",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Statistics/index.html"
                }
            ];
            var faqArr = [
                {
                    "name":"受信者のメール受信環境（ブラウザ、メールソフト等）を知ることはできますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/202688539"
                }
            ];
            break;
        case "global":
            var docArr = [
                {
                    "name":"Global Stats",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Statistics/global.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "category":
            var docArr = [
                {
                    "name":"Category Stats",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Statistics/categories.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "category/compare":
            var docArr = [
                {
                    "name":"Category Comparison",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Statistics/category_compare.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "subuser":
            var docArr = [
                {
                    "name":"Subuser Stats",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Statistics/subuser.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "subuser/compare":
            var docArr = [
                {
                    "name":"Subuser Stats",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Statistics/subuser_compare.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "geo":
            var docArr = [
                {}
            ];
            var faqArr = [
                {}
            ];
            break;
        case "device":
            var docArr = [
                {}
            ];
            var faqArr = [
                {}
            ];
            break;
        case "mailbox_provider":
            var docArr = [
                {}
            ];
            var faqArr = [
                {}
            ];
            break;
        case "mailbox_provider/compare":
            var docArr = [
                {}
            ];
            var faqArr = [
                {}
            ];
            break;
        case "browser":
            var docArr = [
                {}
            ];
            var faqArr = [
                {}
            ];
            break;
        case "browser/compare":
            var docArr = [
                {}
            ];
            var faqArr = [
                {}
            ];
            break;
        case "parse_webhook":
            var docArr = [
                {}
            ];
            var faqArr = [
                {}
            ];
            break;
    }

    createList("doc", docArr);
    createList("faq", faqArr);
}

function activity() {
    var docArr = [
        {
            "name":"メールが届いているか確認する",
            "url":"https://sendgrid.kke.co.jp/docs/Tutorials/C_Manage_Events/using_activity.html"
        },
        {
            "name":"Activity",
            "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/email_activity.html"
        }
    ];
    var faqArr = [
        {
            "name":"送信したメールが相手に届きません。",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203392175"
        },
        {
            "name":"ACTIVITYで古いイベントを確認することはできますか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/202688599"
        },
        {
            "name":"メールのイベントデータをダウンロードすることはできますか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203392115"
        },
        {
            "name":"Deferredによるメールの再送は止められますか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/360000159322"
        },
        {
            "name":"メールが遅延する場合はどうすればよいですか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203532549"
        },
        {
            "name":"送信したメールの内容（本文や件名、宛先および送信元アドレスなど）は保存されますか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203586639"
        },
        {
            "name":"メールがドロップしてしまったのですが、なぜでしょうか？どう対処すればいいですか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/204134009"
        },
        {
            "name":"Deliveredイベントの後にBounceイベントが発生するのは何故ですか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/206128762"
        },
        {
            "name":"なぜメールはバウンスするのですか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203392185"
        },
        {
            "name":"メールがバウンスし続けると何か問題はありますか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203392195"
        },
        {
            "name":"携帯のドメイン指定フィルタが原因でバウンスしてしまいました。再送するにはどうすればよいですか？",
            "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/206442433"
        }
    ];

    createList("doc", docArr);
    createList("faq", faqArr);
}

function suppressions(sub) {
    switch(sub) {
        case "global_unsubscribes":
            var docArr = [
                {
                    "name":"Global Unsubscribes",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Suppressions/global_unsubscribes.html"
                }
            ];
            var faqArr = [
                {}
            ];
            break;
        case "group_unsubscribes":
            var docArr = [
                {
                    "name":"Group Unsubscribes",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Suppressions/group_unsubscribes.html"
                }
            ];
            var faqArr = [
                {}
            ];
            break;
        case "bounces":
            var docArr = [
                {
                    "name":"Bounces",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Suppressions/bounces.html"
                }
            ];
            var faqArr = [
                {
                    "name":"バウンスイベントのREASONに-宛先とは異なるメールアドレスが載っているのはなぜですか",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/360000507642"
                },
                {
                    "name":"バウンスリストに登録されるまでのバウンス回数を変更することはできますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/206442533"
                }
            ];
            break;
        case "spam_reports":
            var docArr = [
                {
                    "name":"Spam Reports",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Suppressions/spam_reports.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "blocks":
            var docArr = [
                {
                    "name":"Blocks",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Suppressions/blocks.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "invalid_emails":
            var docArr = [
                {
                    "name":"Invalid",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Suppressions/invalid_emails.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "advanced_suppression_manager":
            var docArr = [
                {
                    "name":"Unsubscribe Groups",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Suppressions/advanced_suppression_manager.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
    }
    
    createList("doc", docArr);
    createList("faq", faqArr);
}

function settings(sub) {
    switch(sub) {
        case "alerts":
            var docArr = [
                {
                    "name":"Alert Settings",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/alerts.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "api_keys":
            var docArr = [
                {
                    "name":"API Keys",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/api_keys.html"
                }
            ];
            var faqArr = [
                {
                    "name":"APIキーごとにActivityやStatsの情報を確認できますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/360000261101"
                },
                {
                    "name":"APIキー作成時、Webポータルから選択できないパーミッションはどうすれば選択できますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/206272501"
                }
            ];
            break;
        case "parse":
            var docArr = [
                {
                    "name":"メールを受信する",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/E_Receive_Mail/receive_mail.html"
                },
                {
                    "name":"Inbound Parse",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/parse.html"
                }
            ];
            var faqArr = [
                {
                    "name":"SendGridでメールを受信することはできますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203392065"
                },
                {
                    "name":"Parse Webhook（メールの受信機能）の利用料金について教えてください。",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000023622"
                },
                {
                    "name":"WebhookのソースIPアドレスを固定できますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/206074022"
                }
            ];
            break;
        case "access":
            var docArr = [
                {
                    "name":"IP Access Management",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/ip_access_management.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "ip_addresses":
            var docArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            var faqArr = [
                {
                    "name":"Settings > IP Addresses にアクセスできません。",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/360000203361"
                },
                {
                    "name":"固定IPアドレスを追加したいのですが？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203704235"
                },
                {
                    "name":"固定IPアドレスを利用するメリットは何でしょうか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/202688589"
                },
                {
                    "name":"固定IPアドレスをいくつ追加すればよいですか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/207898493"
                },
                {
                    "name":"メールの送信元IPアドレスの確認方法を教えてください。",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/204784635"
                }
            ];
            break;
        case "mail_settings":
            var docArr = [
                {
                    "name":"Mail Settings",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/mail.html"
                },
                {
                    "name":"Event Webhookでイベントを受信する",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/C_Manage_Events/using_event_webhook.html"
                },
                {
                    "name":"Webhookのデバッグ",
                    "url":"https://sendgrid.kke.co.jp/docs/API_Reference/Webhooks/debug.html"
                }
            ];
            var faqArr = [
                {
                    "name":"Forward Bounceを有効化したのに通知メールが届きません。どうしてですか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000166222"
                }
            ];
            break;
        case "partners":
            var docArr = [
                {
                    "name":"Partners",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/partners.html"
                }
            ];
            var faqArr = [
                {
                    "name":"",
                    "url":""
                }
            ];
            break;
        case "sender_auth":
            var docArr = [
                {
                    "name":"独自ドメインを利用する",
                    "url":"https://sendgrid.kke.co.jp/docs/Tutorials/D_Improve_Deliverability/using_whitelabel.html"
                },
                {
                    "name":"Domain Authentication(SPF/DKIM設定)の設定方法",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/Sender_authentication/How_to_set_up_domain_authentication.html"
                },
                {
                    "name":"Link Branding(トラッキングドメイン設定)の設定方法",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/Sender_authentication/How_to_set_up_link_branding.html"
                },
                {
                    "name":"Reverse DNS(IPアドレス逆引き設定)の設定方法",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/Sender_authentication/How_to_set_up_reverse_dns.html"
                },
                {
                    "name":"トラブルシューティング",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/Sender_authentication/Troubleshooting.html"
                }
            ];
            var faqArr = [
                {
                    "name":"独自ドメインを利用してメールを送ることはできますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/202688559"
                },
                {
                    "name":"DKIMやSPFには対応してますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/202688549"
                },
                {
                    "name":"Sender Authenticationを設定したのに、SPF認証結果がFailになります。どうしてですか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/360000373262"
                },
                {
                    "name":"Domain Authenticationを設定する際、DNSにアンダースコア_を含む文字列が登録できません。どうすればいいですか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000080781"
                },
                {
                    "name":"送信元アドレス（From）を変更して送信することはできますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203574969"
                },
                {
                    "name":"独自ドメイン利用（Sender Authentication）および設定時のDNSレコードについて、詳しく教えてください",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203703439"
                },
                {
                    "name":"既存の独自ドメイン利用（Sender Authentication）設定を他のサブユーザと共有できますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/206257703"
                }
            ];
            break;
        case "subusers":
            var docArr = [
                {
                    "name":"サブユーザの作成/管理",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/Subusers/index.html"
                },
                {
                    "name":"設定",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/Subusers/settings.html"
                },
                {
                    "name":"プロフィール編集",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/Subusers/profile.html"
                },
                {
                    "name":"サブユーザへの切替",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/Subusers/impersonation.html"
                }
            ];
            var faqArr = [
                {
                    "name":"サブユーザはどのような場合に利用する機能でしょうか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203392105"
                },
                {
                    "name":"サブユーザでメールを送りたいのですが？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/203574679"
                },
                {
                    "name":"サブユーザを使うのと、複数のアカウントを利用するのとでは、どのような違いがありますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000029901"
                },
                {
                    "name":"Teammate（チームメイト）とサブユーザ機能にはどのような違いがありますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000098382"
                },
                {
                    "name":"サブユーザの独自ドメイン利用（Sender Authentication）を設定する方法について教えてください",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/207544503"
                },
                {
                    "name":"既存の独自ドメイン利用（Sender Authentication）設定を他のサブユーザと共有できますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/206257703"
                }
            ];
            break;
        case "teammates":
            var docArr = [
                {
                    "name":"Teammates",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/teammates.html"
                }
            ];
            var faqArr = [
                {
                    "name":"Teammate（チームメイト）はどのような場合に利用する機能でしょうか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000076062"
                },
                {
                    "name":"Teammate（チームメイト）とサブユーザ機能にはどのような違いがありますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/115000076062"
                }
            ];
            break;
        case "tracking":
            var docArr = [
                {
                    "name":"Tracking",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/tracking.html"
                }
            ];
            var faqArr = [
                {
                    "name":"メール本文内のURLが勝手に置換されてしまいます。解除できますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/206253421"
                }
            ];
            break;
        case "auth":
            var docArr = [
                {
                    "name":"Two-Factor Authentication",
                    "url":"https://sendgrid.kke.co.jp/docs/User_Manual_JP/Settings/two_factor_authentication.html"
                }
            ];
            var faqArr = [
                {
                    "name":"二要素認証に対応していますか？",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/204161549"
                },
                {
                    "name":"sendgrid.kke.co.jpでの二要素認証の設定方法を教えてください",
                    "url":"https://support.sendgrid.kke.co.jp/hc/ja/articles/204260539"
                }
            ];
            break;
    }

    createList("doc", docArr);
    createList("faq", faqArr);
}

function createList(type, docparam) {
    var docUl = document.getElementById(type);
    if(type === "doc") {
        docUl = document.getElementById("doc");
    } else if(type === "faq") {
        docUl = document.getElementById("faq");
    }
    
    for(doc of docparam) {
        var docLink = document.createElement("a");
        docLink.textContent = doc.name;
        docLink.setAttribute("href", doc.url);
        docLink.setAttribute("target", "_blank");
        var docNode = document.createElement("li") ;
        docNode.setAttribute("class", "menu-item");
        docNode.appendChild(docLink);
        var docDivider = document.createElement("div");
        docDivider.setAttribute("class","divider");
        docUl.appendChild(docNode);
        docUl.appendChild(docDivider);
    }
}