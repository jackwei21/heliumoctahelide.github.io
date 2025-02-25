var story = [
    [
        "bg_sunnytown_2",
        "char_348_ceylon_4",
        "avg_npc_017_3",
        "avg_npc_017_2",
        "char_348_ceylon_6",
        "bg_offce",
        "avg_npc_020",
        "avg_npc_023_3",
        "char_348_ceylon_2",
        "char_348_ceylon_3"
    ],
    [
        "m_sys_fesready_loop",
        "m_sys_fesready_intro",
        "d_gen_livecrowd",
        "d_gen_doorknockquite",
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro",
        "m_bat_fesmetal_loop",
        "m_bat_fesmetal_intro"
    ],
    [
        "playground.clearDialog();delay(1);voice.playMusic({intro:'m_sys_fesready_intro', key:'m_sys_fesready_loop', volume:0.8, crossfade:1.5});background.showImage({image:'bg_sunnytown_2',screenadapt:'coverall', fadetime:1,block:true});playground.clearDialog();playground.drawCharacter({name:'char_348_ceylon_4',fadetime:1,block:true});delay(1);playground.drawDialog({name:'锡兰',text:'穿过市民广场，那栋最高的建筑就是市政厅了。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});delay(0.5);playground.drawCharacter({});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'avg_npc_017_3',fadetime:1,block:true});delay(1);playground.drawDialog({name:'D.D.D.',text:'分会场的大家你们还好吗！！感谢你们来到这里，我是D.——D.——D.————！'});",
        "playground.drawCharacter({});background.cameraShake({duration:2, xstrength:8, ystrength:8, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'d_gen_livecrowd', volume:0.4, loop:false, channel:'people'});playground.drawDialog({name:'观众',text:'（震天的欢呼声）'});",
        "playground.drawCharacter({name:'avg_npc_017_3'});playground.drawDialog({name:'D.D.D.',text:'在这炎炎夏日，各位聚集在这里的目的想必都是一样的，那就是——'});",
        "playground.drawCharacter({});background.cameraShake({duration:2, xstrength:8, ystrength:8, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'d_gen_livecrowd', volume:0.4, loop:false, channel:'people'});playground.drawDialog({name:'观众',text:'音——乐——！'});",
        "playground.drawCharacter({name:'avg_npc_017_2'});playground.drawDialog({name:'D.D.D.',text:'我没有听到你们在说什么？！用你们最大的音量，让整个汐斯塔都听到，你们想要什么！！！'});",
        "playground.drawCharacter({});background.cameraShake({duration:2, xstrength:8, ystrength:8, vibrato:30, randomness:90, fadeout:true, block:false});voice.playSound({key:'d_gen_livecrowd', volume:0.4, loop:false, channel:'people'});playground.drawDialog({name:'观众',text:'音————乐————！！！'});",
        "background.cameraShake({duration:1, xstrength:5, ystrength:3, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawCharacter({name:'avg_npc_017_3'});playground.drawDialog({name:'D.D.D.',text:'那么——举起你们的双手！准备出发！！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.7, block:true});delay(0.5);playground.drawCharacter({});blocker.blocker({a:0, fadetime:0.7, block:true});playground.drawCharacter({name:'char_348_ceylon_4'});playground.drawDialog({name:'锡兰',text:'黑曜石节期间，这是每天都有的事。毕竟音乐会可是黑曜石节上大家最喜爱的部分之一。'});",
        "playground.drawDialog({name:'锡兰',text:'主LIVE到晚上才会在加里森游乐园的最大舞台举办，白天的时候也会在各个地区开展小型的现场活动。'});",
        "playground.Decision({options:[['1', '2'], '我已经热血沸腾了！', '这样的音乐有点猛烈......']});",
        "predicate = ['1', '2'];",
        "playground.drawDialog({name:'锡兰',text:'哈哈，我也这么觉得，我在维多利亚留学时，更喜欢古典和优雅的音乐。'});",
        "playground.drawDialog({name:'锡兰',text:'虽然黑曜石节也有请到那样的音乐艺人，不过实际上如你们所见，还是这种音乐更能吸引游客。'});",
        "playground.drawCharacter({name:'char_348_ceylon_4'});playground.drawDialog({name:'锡兰',text:'应该是这些年流行起来的吧，我小的时候，爵士还是主流呢。'});",
        "playground.drawDialog({name:'锡兰',text:'我最喜欢在第二大道上待着，带上几本我最喜欢的书，我就能在那里的咖啡馆坐上一天。'});",
        "playground.drawDialog({name:'锡兰',text:'听着音乐，喝着一杯绿茶，吹着海风。'});",
        "playground.drawDialog({name:'锡兰',text:'我在那个时候就开始相信了，汐斯塔一定是这世界上最棒的城市。'});",
        "playground.Decision({options:[['1'], '看来你也爱着这个地方呢。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_348_ceylon_6'});playground.drawDialog({name:'锡兰',text:'当然！这里有我重要的家人，我重要的支柱。'});",
        "playground.drawDialog({name:'锡兰',text:'除开爸爸以外，还有一位对我来说很重要的人也在市政厅工作。'});",
        "playground.drawDialog({name:'锡兰',text:'一会儿应该也能见到她。有了她的帮助，让其他人理解事情的严重性肯定会轻松很多！'});",
        "playground.Decision({options:[['1', '2'], '听起来你很信任她？', '是你的母亲吗？']});",
        "predicate = ['1', '2'];",
        "playground.drawCharacter({name:'char_348_ceylon_4'});playground.drawDialog({name:'锡兰',text:'我的母亲在生我的时候就去世了。去世后父亲也变得埋头于工作。'});",
        "playground.drawDialog({name:'锡兰',text:'从我小时候一直照顾着我的人是我家里的保镖，她的名字叫黑。'});",
        "playground.drawDialog({name:'锡兰',text:'父亲操劳的时候，是她陪着我忍耐着我的任性。即使没有血缘关系，但是黑就像我的姐姐一样，是我重要的家人。'});",
        "playground.drawDialog({name:'锡兰',text:'一会儿见到她我再给博士你介绍介绍。'});",
        "playground.drawDialog({name:'锡兰',text:'看，博士，前面就是了。我们直接进去吧。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:2, block:true});playground.drawCharacter({});background.showImage({image:'bg_offce'});voice.stopMusic({fadetime:3});blocker.blocker({a:0, fadetime:2, block:true});voice.playSound({key:'d_gen_doorknockquite', volume:0.7});delay(1);playground.drawCharacter({name:'avg_npc_020',screenadapt:'coverall'});playground.drawDialog({name:'保镖',text:'克洛宁先生，锡兰小姐有事情要找你。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_023_3',fadetime:1,block:true});delay(1);playground.drawDialog({name:'克洛宁',text:'什么重要的事需要您亲自来市政厅，亲爱的大小姐？'});",
        "playground.drawDialog({name:'克洛宁',text:'现在节日的安排紧锣密鼓地推进，大家可没什么空闲时间。'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_2',focus:2});playground.drawDialog({name:'锡兰',text:'克洛宁，我就直接开门见山地说了。汐斯塔火山可能马上就要爆发了，说不定是下一秒，说不定是几天后。'});",
        "playground.drawDialog({name:'锡兰',text:'所有的旅客和市民的安全都会受到威胁，我们需要给他们提供指引，开始准备转移或者避难。'});",
        "playground.drawDialog({name:'锡兰',text:'黑曜石节的各项后续活动需要马上中止。'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_2',focus:1});playground.drawDialog({name:'克洛宁',text:'嚯，我的大小姐，您知道您现在在说什么吗。'});",
        "voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.8, crossfade:1.5});playground.drawDialog({name:'克洛宁',text:'如果是别人这么对我说话，早就被我轰出去了。'});",
        "playground.drawDialog({name:'克洛宁',text:'但是因为是您，我愿意给您解释一下。'});",
        "playground.drawDialog({name:'克洛宁',text:'火山的问题，您完全不必担心，虽然不知道您是从哪里听来的消息，但这显然是无稽之谈。'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_3',focus:2});playground.drawDialog({name:'锡兰',text:'......你在开什么玩笑？'});",
        "playground.drawDialog({name:'锡兰',text:'已经有很多征兆证明这座火山已经开始重新活动，很可能短期内就会爆发。'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_3',focus:1});playground.drawDialog({name:'克洛宁',text:'比如说？'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_3',focus:2});playground.drawDialog({name:'锡兰',text:'源石虫的狂躁化、异常气温、不太对的气味等等，这些都是证据。'});",
        "playground.drawDialog({name:'锡兰',text:'说这么多你如果还是不信，那就看下我带来的资料，里面记载有详细分析过程和结论。'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_3',focus:1});playground.drawDialog({name:'克洛宁',text:'明显？是源石虫开口告诉了您这一点，还是气温或者什么气味这么说了？'});",
        "playground.drawDialog({name:'克洛宁',text:'我怎么一点也不明白，这些毫无根据的数字和火山要爆发有什么关系呢？'});",
        "playground.drawDialog({name:'克洛宁',text:'我只知道，由市长本人亲自安排，由我提供技术设计出的火山观测系统一点问题都没有。'});",
        "playground.drawDialog({name:'克洛宁',text:'现在的汐斯塔火山参数都跟过去几年没有什么区别。非要说的话，更稳定了？'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_3',focus:2});playground.drawDialog({name:'锡兰',text:'你在说什么，事实不就正摆在你面前的吗......'});",
        "playground.Decision({options:[['1'], '你是天灾信使，却不懂这些？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'avg_npc_023_3'});playground.drawDialog({name:'克洛宁',text:'你又是什么人？'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_2',focus:2});playground.drawDialog({name:'锡兰',text:`${nickname}博士是专门机构的研究人员，他和他的其他同事们都有专门的火山知识。`});",
        "playground.drawDialog({name:'锡兰',text:'这些参数也都是他们的专业部门给了我帮助并且进行验证的结果。'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_2',focus:1});playground.drawDialog({name:'克洛宁',text:'原来如此，原来如此。'});",
        "playground.drawDialog({name:'克洛宁',text:'......呵呵，我懂了。'});",
        "playground.drawDialog({name:'克洛宁',text:'所以就是你们这些奇怪的外来游客蒙骗了大小姐的吗。'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_2',focus:2});playground.drawDialog({name:'锡兰',text:'你在说什么？'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_2',focus:1});playground.drawDialog({name:'克洛宁',text:'这不是显而易见的事吗，大小姐，您被这个来路不明的人欺骗了。'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_3',focus:2});playground.drawDialog({name:'锡兰',text:'克洛宁，你到底在说些什么。你连我的话都不相信吗？！'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_3',focus:1});playground.drawDialog({name:'克洛宁',text:'我在说，您一直在外留学所以并不知道，事实上眼红我们汐斯塔市发展的人是很多的。'});",
        "playground.drawDialog({name:'克洛宁',text:'每年都会有人想要阻碍市长大人发展城市的步伐，威胁、爆破、暗杀，就连我这样的默默无闻的人都被波及过好几次了。'});",
        "playground.drawDialog({name:'克洛宁',text:'当然，散布火山要爆发的谣言也不是第一次，但是呢，能把您都给骗了倒还是第一次。'});",
        "playground.drawDialog({name:'克洛宁',text:'不得不说，这次的对手对市长大人了解很深啊，连大小姐您刚留学回来没多久都能摸清楚。'});",
        "playground.drawDialog({name:'克洛宁',text:'而且胆子也很大，竟然光明正大地就这么走进来了。'});",
        "playground.drawCharacter({name:'char_348_ceylon_3'});playground.drawDialog({name:'锡兰',text:'......我确实不知道这些，但我说的是真的！'});",
        "playground.drawDialog({name:'锡兰',text:'我才不会相信莫名其妙的外来人士！'});",
        "playground.drawCharacter({name:'avg_npc_023_3'});playground.drawDialog({name:'克洛宁',text:'在我看来，这个您所谓的博士跟以前的那些人没有任何区别。'});",
        "playground.drawDialog({name:'克洛宁',text:'为了掠夺这个城市，不择手段！'});",
        "playground.Decision({options:[['1', '2'], '欲加之罪，何患无辞。', '这个笑话并不好笑。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'avg_npc_023_3'});playground.drawDialog({name:'克洛宁',text:'欲加之罪？哈哈，你们这种人，总是这么说的。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'avg_npc_023_3'});playground.drawDialog({name:'克洛宁',text:'真巧，我也觉得你们讲的笑话并不好笑。'});",
        "predicate = ['1', '2'];",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_3',focus:1});playground.drawDialog({name:'克洛宁',text:'大小姐，您涉世不深，难免会遇到这样的事。'});",
        "playground.drawDialog({name:'克洛宁',text:'请放心吧，这个散播谣言的不法之徒，我一定会让他们得到应有的惩罚。'});",
        "playground.drawCharacter({name:'avg_npc_023_3'});voice.playMusic({intro:'m_bat_fesmetal_intro', key:'m_bat_fesmetal_loop', volume:0.8, crossfade:1.5});playground.drawDialog({name:'克洛宁',text:'人都给我全都过来。'});",
        "playground.drawDialog({name:'克洛宁',text:'把他拿下。'});",
        "playground.drawCharacter({name:'avg_npc_020'});playground.drawDialog({name:'保镖',text:'好的。'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_3',focus:2});playground.drawDialog({name:'锡兰',text:'克洛宁！你是连我说的话都无视了吗？'});",
        "playground.drawDialog({name:'锡兰',text:'只要我在这里，就不会让你这么做！'});",
        "playground.drawCharacter({name:'avg_npc_023_3',name2:'char_348_ceylon_3',focus:1});playground.drawDialog({name:'克洛宁',text:'那就很遗憾了，我可不能让你们危害到汐斯塔市的秩序。'});",
        "playground.drawDialog({name:'克洛宁',text:'赶紧的，把这些想要扰乱黑曜石节的人抓起来。'});",
        "playground.drawCharacter({name:'avg_npc_023_3'});playground.drawDialog({name:'克洛宁',text:'你们去把大小姐也控制住！别弄伤她，让她冷静冷静！'});",
        "playground.Decision({options:[['1', '2'], '锡兰，小心！', '走！离开这里！']});",
        "predicate = ['1', '2'];",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];