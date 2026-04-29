(function() {
    const path = window.location.pathname;
    let lang = 'en'; 
    if (path.includes('/tc/')) lang = 'tc';
    if (path.includes('/sc/')) lang = 'sc';

    const currentFile = path.split('/').pop();

	const pageTitles = {
		en: {
			"index.html": "Home - Learn Cantonese",
			"phonetic_chart.html": "Phonetic Chart - Learn Cantonese",
			"matching_game.html": "Matching Game - Learn Cantonese",
			"sentence_builder.html": "Sentence Builder - Learn Cantonese",
			"listening_quiz.html": "Listening Quiz - Learn Cantonese",
			"jyutping_lookup.html": "Jyutping Lookup - Learn Cantonese",
			"speech_practice.html": "Speech Practice - Learn Cantonese",
			"sb_word_order.html": "Word Order - Sentence Builder",
			"sb_mc.html": "Multiple Choice - Sentence Builder",
			"sb_fill_blank.html": "Fill in the Blank - Sentence Builder",
			"matching_game_easy_S_to_C.html": "Sound to Character (Easy) - Learn Cantonese",
			"matching_game_easy_S_to_E.html": "Sound to English (Easy) - Learn Cantonese",
			"matching_game_hard_S_to_C.html": "Sound to Character (Hard) - Learn Cantonese",
			"matching_game_hard_S_to_E.html": "Sound to English (Hard) - Learn Cantonese",
			"results.html": "My Records - Learn Cantonese"
		},
		tc: {
			"index.html": "首頁 - 粵語學習",
			"phonetic_chart.html": "拼音表 - 粵語學習",
			"matching_game.html": "配對遊戲 - 粵語學習",
			"sentence_builder.html": "造句練習 - 粵語學習",
			"listening_quiz.html": "聽力測試 - 粵語學習",
			"lookup.html": "粵拼查詢 - 粵語學習",
			"speech_practice.html": "口語練習 - 粵語學習", 
			"sb_word_order.html": "詞序練習 - 造句練習",
			"sb_mc.html": "選擇題 - 造句練習",
			"sb_fill_blank.html": "填空練習 - 造句練習",
			"results.html": "學習記錄 - 粵語學習" 
		},
		sc: {
			"index.html": "首页 - 粤语学习",
			"phonetic_chart.html": "拼音表 - 粤语学习",
			"matching_game.html": "配对游戏 - 粤语学习",
			"sentence_builder.html": "造句练习 - 粤语学习",
			"listening_quiz.html": "听力测试 - 粤语学习",
			"lookup.html": "粤拼查询 - 粤语学习",
			"speech_practice.html": "口语练习 - 粤语学习", 
			"sb_word_order.html": "词序练习 - 造句练习",
			"sb_mc.html": "选择题 - 造句练习",
			"sb_fill_blank.html": "填空练习 - 造句练习",
			"results.html": "学习记录 - 粤语学习"
		}
	};

    const translatedTitle = pageTitles[lang][currentFile] || "Learn Cantonese";
    document.title = translatedTitle;

    const htmlLangMap = { 'en': 'en', 'tc': 'zh-Hant', 'sc': 'zh-Hans' };
    document.documentElement.lang = htmlLangMap[lang];
})();