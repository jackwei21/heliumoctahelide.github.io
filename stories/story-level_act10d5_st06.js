var story = [
    [
        "bg_corridor",
        "char_002_amiya_6",
        "char_002_amiya_1",
        "char_002_amiya_4",
        "char_002_amiya_3",
        "bg_bridge",
        "char_115_headbr_9",
        "char_148_nearl_1",
        "bg_canteen",
        "char_196_sunbr_2",
        "char_196_sunbr_3",
        "char_196_sunbr_5",
        "char_181_flower_1",
        "char_199_yak_1",
        "char_195_glassb_2",
        "bg_trainingcom",
        "char_194_rosali_1",
        "char_197_poca_1",
        "char_197_poca_2",
        "char_130_doberm_ex",
        "char_002_amiya_2"
    ],
    [
        "m_dia_path_loop",
        "m_dia_path_intro",
        "d_gen_walk_n",
        "m_avg_warm_loop",
        "m_avg_warm_intro"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();delay(1);blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_corridor',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_dia_path_intro', key:'m_dia_path_loop', volume:0.4});playground.Decision({options:[['1'], '......米娅']});",
        "predicate = ['1'];",
        "playground.Decision({options:[['1'], '阿米娅。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'诶？啊，抱歉，博士，我不小心发呆了。'});",
        "playground.Decision({options:[['1'], '你的脸色不太好。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'啊，嗯，有些稍微在意的事呢。'});",
        "playground.drawDialog({name:'阿米娅',text:'博士，你看，这里有一份内部的调岗申请。'});",
        "playground.drawDialog({name:'阿米娅',text:'申请人是，娜塔莉娅·罗斯托夫。'});",
        "playground.drawDialog({name:'阿米娅',text:'意向是从后勤部门调往前线。'});",
        "playground.Decision({options:[['1', '2', '3'], '是乌萨斯自治团的......', '......', '呃，是谁来着？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'是的，她是唯一一个在后勤部门工作的自治团成员。'});",
        "playground.drawDialog({name:'阿米娅',text:'她似乎因为工作能力出众，在后勤部门风评非常好呢。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'博士果然也会在意吧。老实说，这一次，我也不是很想通过呢。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'乌萨斯人的名字都有些难记，博士不记得也很正常呢。'});",
        "playground.drawDialog({name:'阿米娅',text:'她是我们从切尔诺伯格营救出来的难民之一，也是凛冬的乌萨斯自治团中的成员。'});",
        "playground.drawDialog({name:'阿米娅',text:'其实也是我们救出来的难民中，唯一的贵族。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'博士你还记得吧，凛冬她们之所以能够成为干员，是因为她们本人的要求。'});",
        "playground.drawDialog({name:'阿米娅',text:'我一开始其实是很反对的。'});",
        "playground.Decision({options:[['1', '2', '3'], '毕竟她们才刚被救出来没多久......', '......', '我相信你的判断。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'是的。原本，即使是她们本人的意向，我也会说服凯尔希医生否决掉的。'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'只是......'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'她们有定期接受心理方面的辅导，从报告来看，她们虽然有一定的阴影，但总体是健康的。'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'只是......'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'谢谢博士。'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'但是......'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'我不知道该怎么说比较好。'});",
        "playground.drawDialog({name:'阿米娅',text:'......博士，你可以去看一看娜塔莉娅小姐吗？'});",
        "playground.Decision({options:[['1', '2', '3'], '好。', '......', '好麻烦。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'那就拜托博士你了。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'博士，虽然这件事会有些麻烦，但也只能拜托博士你了。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'博士，这可是非常重要的事，不要偷懒啦。'});",
        "playground.drawDialog({name:'阿米娅',text:'而且，也不用非常严肃地去观察，就当做是工作之余的转换心情去看一看就好了。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_002_amiya_3'});playground.drawDialog({name:'阿米娅',text:'啊，午休时间也到了，博士也不用太急，吃完午饭后去找她吧。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_bridge',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_115_headbr_9',fadetime:1,block:true});delay(1);playground.drawDialog({name:'凛冬',text:'喂，博士。'});",
        "playground.Decision({options:[['1', '2', '3'], '有什么事吗？', '......', '嘿，凛冬。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_115_headbr_9'});playground.drawDialog({name:'凛冬',text:'没事，我只是看到你叫你一声。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_115_headbr_9'});playground.drawDialog({name:'凛冬',text:'喂，别装作没听到，你明明停下来了吧。'});",
        "playground.drawDialog({name:'凛冬',text:'你这家伙不是工作很多吗，怎么在这里闲逛。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_115_headbr_9'});playground.drawDialog({name:'凛冬',text:'你看起来很闲的样子。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_115_headbr_9'});playground.drawDialog({name:'凛冬',text:'我接下来要出任务，可没你这样的闲工夫乱逛。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_148_nearl_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'临光',text:'凛冬，我说过，出发前不要随便走动。'});",
        "playground.drawCharacter({name:'char_115_headbr_9', name2:'char_148_nearl_1',focus:1});playground.drawDialog({name:'凛冬',text:'......'});",
        "playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'午安，博士。'});",
        "playground.drawDialog({name:'临光',text:'好了，凛冬，快回休息室去，该出发了。'});",
        "playground.drawCharacter({name:'char_115_headbr_9', name2:'char_148_nearl_1',focus:1});playground.drawDialog({name:'凛冬',text:'哼，总有一天我也要当队长对你发号施令。'});",
        "playground.drawDialog({name:'凛冬',text:'还有你，博士，我总有一天会超过你的。'});",
        "playground.drawCharacter({name:'char_115_headbr_9', name2:'char_148_nearl_1',focus:2});playground.drawDialog({name:'临光',text:'志气不错，不过等你赢得过我一只手之后再说吧。'});",
        "playground.drawDialog({name:'临光',text:'至于博士，嗯，赢过全力的我再说吧。'});",
        "playground.drawCharacter({name:'char_115_headbr_9', name2:'char_148_nearl_1',focus:1});playground.drawDialog({name:'凛冬',text:'啧。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n'});delay(1);playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'哦，博士，你应该知道，最近轮到我带新人小队。'});",
        "playground.drawDialog({name:'临光',text:'那么要是没有什么事的话，我也先离开了。'});",
        "playground.Decision({options:[['1'], '你觉得凛冬怎么样？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'嗯？'});",
        "playground.drawDialog({name:'临光',text:'嗯......首先正如你刚才看到的，不服管教，目无尊长。'});",
        "playground.drawDialog({name:'临光',text:'而且，作为战士，在这个年纪，往往不知道自己在和什么战斗，也不知道自己该为什么战斗，这很正常。'});",
        "playground.drawDialog({name:'临光',text:'但在她身上这一点尤为明显。'});",
        "playground.drawDialog({name:'临光',text:'她有着很重的迷茫，我不知道那是什么，但这是一个很不好的现象，是我接下来要重点纠正她的地方。'});",
        "playground.Decision({options:[['1', '2', '3'], '你是说，她只是看上去很凶狠？', '......', '唉，我还挺想跟她搞好关系的。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'没错。外露的暴力是一种保护壳。'});",
        "playground.drawDialog({name:'临光',text:'我不敢说她外壳下的内心就是脆弱的，但我至少敢说，她的凶狠在我面前不堪一击。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'别担心，博士，她还是个孩子。'});",
        "playground.drawDialog({name:'临光',text:'我听说她来自切尔诺伯格，在那里她恐怕有一些不好的回忆，但她还有未来。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'哈哈，博士，不要急。'});",
        "playground.drawDialog({name:'临光',text:'你也知道，她并不是讨厌你或怎么样。'});",
        "playground.drawDialog({name:'临光',text:'倒不如说，她对于亲近自己的人才会下意识地去攻击。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_148_nearl_1'});playground.drawDialog({name:'临光',text:'不过，我必须要说，我并不讨厌这孩子，博士。'});",
        "playground.drawDialog({name:'临光',text:'其实我挺喜欢她的，她身上有一种纯粹的正直，即使迷茫，这股正直也会带领她不至于走偏。'});",
        "playground.drawDialog({name:'临光',text:'这是一件很难得的事。'});",
        "playground.drawDialog({name:'临光',text:'啊，要到出发时间了，那么，我先失陪了。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_canteen',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_196_sunbr_2',fadetime:1,block:true});delay(1);playground.drawDialog({name:'古米',text:'咦，是博士！'});",
        "playground.Decision({options:[['1', '2', '3'], '中午好，古米。', '......', '咦，是古米！']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_196_sunbr_2'});playground.drawDialog({name:'古米',text:'博士中午好！'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_196_sunbr_3'});playground.drawDialog({name:'古米',text:'难道是古米太矮了吗？！'});",
        "playground.drawDialog({name:'古米',text:'博士，喂，看得到古米吗？'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_196_sunbr_5'});playground.drawDialog({name:'古米',text:'博士今天心情看起来不错呢！'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_196_sunbr_2'});playground.drawDialog({name:'古米',text:'博士来食堂吃饭吗？'});",
        "playground.drawDialog({name:'古米',text:'古米我这几天没有什么任务，正在给厨房帮忙呢。'});",
        "playground.drawCharacter({name:'char_181_flower_1'});playground.drawDialog({name:'调香师',text:'古米，我送香料来咯。'});",
        "playground.drawCharacter({name:'char_196_sunbr_2', name2:'char_181_flower_1',focus:1});playground.drawDialog({name:'古米',text:'啊，谢谢调香师姐姐！放在那边就好了！'});",
        "playground.drawDialog({name:'古米',text:'调香师姐姐要在食堂吃饭吗？'});",
        "playground.drawCharacter({name:'char_196_sunbr_2', name2:'char_181_flower_1',focus:2});playground.drawDialog({name:'调香师',text:'我就不用了，我更习惯在自己的工作室里自炊。'});",
        "playground.drawCharacter({name:'char_196_sunbr_2', name2:'char_181_flower_1',focus:1});playground.drawDialog({name:'古米',text:'诶诶，我可以来吃吗，我也想向调香师姐姐学习香料的运用！'});",
        "playground.drawCharacter({name:'char_196_sunbr_2', name2:'char_181_flower_1',focus:2});playground.drawDialog({name:'调香师',text:'呵呵，当然可以。'});",
        "playground.drawCharacter({name:'char_199_yak_1'});playground.drawDialog({name:'角峰',text:'古米，有空的话来帮把手。'});",
        "playground.drawCharacter({name:'char_196_sunbr_5'});playground.drawDialog({name:'古米',text:'来了！'});",
        "playground.drawCharacter({name:'char_199_yak_1'});playground.drawDialog({name:'角峰',text:'吽出任务去了，人手有点不够，这面锅就交给你了，我有点顾不过来。'});",
        "playground.drawCharacter({name:'char_196_sunbr_2'});playground.drawDialog({name:'古米',text:'交给我吧，角峰大叔！啊，调香师姐姐，我下次再来，博士也吃好哦！'});",
        "playground.drawCharacter({name:'char_181_flower_1'});playground.drawDialog({name:'调香师',text:'好的，随时欢迎。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'近卫干员',text:'今天能吃到古米做的饭？！'});",
        "playground.drawDialog({name:'后勤干员',text:'哈哈，今天真走运！'});",
        "playground.drawDialog({name:'后勤干员',text:'我靠，我刚吃完！'});",
        "playground.drawDialog({name:'近卫干员',text:'哈哈，那我再来一碗！'});",
        "playground.drawCharacter({name:'char_196_sunbr_5'});playground.drawDialog({name:'古米',text:'各位不要急，都有份的！'});",
        "playground.drawCharacter({name:'char_181_flower_1'});playground.drawDialog({name:'调香师',text:'古米真是个有活力的孩子，对吧，博士？'});",
        "playground.Decision({options:[['1', '2', '3'], '确实。', '......', '确实！']});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_181_flower_1'});playground.drawDialog({name:'调香师',text:'有一次她在我的工作室里睡着了，说了一些梦话，让我稍微有些担心。'});",
        "playground.drawDialog({name:'调香师',text:'不过现在看到她已经开始融入罗德岛了，这样我就稍微放心了。'});",
        "playground.drawDialog({name:'调香师',text:'虽然或许没有办法马上变好，但是慢慢地，一定会好起来吧。'});",
        "playground.Decision({options:[['1', '2', '3'], '她说了什么梦话？', '......', '如果是这样就好了。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_181_flower_1'});playground.drawDialog({name:'调香师',text:'哎呀，博士，有时候直接并不是好事哦？'});",
        "playground.drawDialog({name:'调香师',text:'这是个需要我为她保守的秘密，不过请放心，她需要的不是安慰，她需要的只是时间。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_181_flower_1'});playground.drawDialog({name:'调香师',text:'博士很在意吗？呵呵，博士果然很担心干员们呢。'});",
        "playground.drawDialog({name:'调香师',text:'不过请放心吧，如果真的是很重要的事，我不会不说的。'});",
        "playground.drawDialog({name:'调香师',text:'每个人都有自己的小秘密，不是吗？'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_181_flower_1'});playground.drawDialog({name:'调香师',text:'博士，不要太自大哦，觉得自己需要照顾所有人这种想法是不好的。'});",
        "playground.drawDialog({name:'调香师',text:'干员之间也是会互相照拂的。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_181_flower_1'});playground.drawDialog({name:'调香师',text:'那么，我先回办公室了。'});",
        "playground.drawDialog({name:'调香师',text:'博士要是累了随时欢迎来我这里坐坐。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n'});delay(1);playground.drawCharacter({name:'char_195_glassb_2',fadetime:1,block:true});delay(1);playground.drawDialog({name:'真理',text:'博士，您好。'});",
        "playground.Decision({options:[['1', '2', '3'], '中午好，真理。', '......', '今天的菜怎么样，真理？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_195_glassb_2'});playground.drawDialog({name:'真理',text:'在食堂遇到博士这还是第一次呢。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_195_glassb_2'});playground.drawDialog({name:'真理',text:'博士，你好像在思考什么事情，我建议你不要站在食堂门口思考。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_195_glassb_2'});playground.drawDialog({name:'真理',text:'嗯......饭稍微有些硬，汤的话我觉得甜味有些太过了，不过菜色我相当喜欢。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_195_glassb_2'});playground.drawDialog({name:'真理',text:'那么，博士，如果没有什么事的话，我先离开了。'});",
        "playground.drawDialog({name:'真理',text:'下午我还有课要上。'});",
        "playground.Decision({options:[['1'], '课？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_195_glassb_2'});playground.drawDialog({name:'真理',text:'是的，海帕提娅老师的历史课。'});",
        "playground.drawDialog({name:'真理',text:'在经过一段时间的尝试后，我发现海帕提娅老师讲授的历史对我是最有帮助的。'});",
        "playground.Decision({options:[['1', '2', '3'], '我可以帮你吗？', '......', '我也很懂历史！']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_195_glassb_2'});playground.drawDialog({name:'真理',text:'唔，不。'});",
        "playground.drawDialog({name:'真理',text:'啊，我并不是在拒绝，我很难向您解释，因为我也不是很明确。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_195_glassb_2'});playground.drawDialog({name:'真理',text:'老师的授课很有意思，博士有空的话我也推荐您来听一听。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_195_glassb_2'});playground.drawDialog({name:'真理',text:'唔，博士，如果我没记错的话，您失去了记忆对吧？'});",
        "playground.drawDialog({name:'真理',text:'不过还是感谢您的好意。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_195_glassb_2'});playground.drawDialog({name:'真理',text:'只能说，我需要一些引导。'});",
        "playground.drawDialog({name:'真理',text:'事实上我也不知道学习历史是否真的能对我有所帮助。'});",
        "playground.drawDialog({name:'真理',text:'不过，前人的经验和思维或许能够为我提供一些灵感。'});",
        "playground.drawDialog({name:'真理',text:'那么，我先去上课了。'});",
        "playground.Decision({options:[['1'], '你知道娜塔莉娅在哪里吗？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_195_glassb_2'});playground.drawDialog({name:'真理',text:'娜塔莉娅......您在找她吗？'});",
        "playground.drawDialog({name:'真理',text:'古米告诉我，她也想要成为前线干员，虽然我不知道申请有没有通过，不过以我对她的了解，她应该已经在为此做准备了。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_trainingcom',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:1});playground.drawDialog({name:'烈夏',text:'娜塔莉娅，你的准头好差哦。'});",
        "playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:2});playground.drawDialog({name:'娜塔莉娅',text:'罗莎琳，别得意，我一定会打中你的。'});",
        "playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:1});playground.drawDialog({name:'烈夏',text:'嘻嘻，不可能不可能~'});",
        "playground.drawDialog({name:'烈夏',text:'还有，你现在应该叫我烈夏！早露干员~'});",
        "playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:2});playground.drawDialog({name:'娜塔莉娅',text:'好吧，烈夏干员，让我们等着瞧吧。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:1});playground.drawDialog({name:'烈夏',text:'谁让你非要用这么大的家伙的。'});",
        "playground.drawDialog({name:'烈夏',text:'这是你在切尔诺伯格里找到的东西吧，扔掉换把更趁手的怎么样？'});",
        "playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:2});playground.drawDialog({name:'娜塔莉娅',text:'呼，呼......这叫纪念。'});",
        "playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:1});playground.drawDialog({name:'烈夏',text:'好吧，那你可要努力啦。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:1});playground.drawDialog({name:'烈夏',text:'娜塔莉娅，我感觉你步子都迈不动啦，还是休息一会儿比较好哦。'});",
        "playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_2',focus:2});playground.drawDialog({name:'娜塔莉娅',text:'我还能坚持......'});",
        "playground.drawCharacter({name:'char_197_poca_2'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawDialog({name:'娜塔莉娅',text:'呀啊！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'你的耐力还不行，娜塔莉娅。'});",
        "playground.drawDialog({name:'杜宾',text:'虽然作为乌萨斯人你有不错的底子，不过离能战斗还差远了。'});",
        "playground.drawCharacter({});playground.clearDialog();playground.drawCharacter({name:'char_197_poca_2',fadetime:1,block:true});delay(1);playground.drawDialog({name:'娜塔莉娅',text:'嘶......呼......对不起，我会加油的。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex',name2:'char_197_poca_2',focus:1});playground.drawDialog({name:'杜宾',text:'但你的意志力比我想的要强很多，不错。'});",
        "playground.drawDialog({name:'杜宾',text:'你如果能坚持过这一轮训练，即使不成为干员，也会对你有好处。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex',name2:'char_197_poca_1',focus:2});playground.drawDialog({name:'娜塔莉娅',text:'谢谢您的夸奖。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex',name2:'char_197_poca_1',focus:1});playground.drawDialog({name:'杜宾',text:'嗯......嗯？'});",
        "playground.drawDialog({name:'杜宾',text:'你先休息一下吧。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex',name2:'char_197_poca_1',focus:2});playground.drawDialog({name:'娜塔莉娅',text:'是！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'烈夏，你也先自己去做些训练。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex',name2:'char_194_rosali_1',focus:2});playground.drawDialog({name:'烈夏',text:'是~'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'格瑞斯，你看着点。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'格瑞斯教官',text:'我知道了。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'博士，午休时间你该好好休息，这里不是你需要来的地方。'});",
        "playground.Decision({options:[['1', '2', '3'], '午安，杜宾教官。', '......', '我不能来吗？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'午安，博士。'});",
        "playground.drawDialog({name:'杜宾',text:'如果你只是想和我打招呼，那么我就回去了。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'你逐渐有了一些领导者的姿态，不得不说，这不是坏事。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'你可以来，只不过我会需要抽出时间来应付你，我希望这样的时间不会很多。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'不过，我猜你应该是从阿米娅那里听说，凛冬那个小团体里的另一个人也要申请成为干员，才想着过来看看吧。'});",
        "playground.drawDialog({name:'杜宾',text:'别露出那副惊讶的表情。'});",
        "playground.drawDialog({name:'杜宾',text:'阿米娅对从乌萨斯救出来的那批难民十分上心不是秘密。'});",
        "playground.drawDialog({name:'杜宾',text:'你还记得吧，凛冬、古米、真理、烈夏——'});",
        "playground.drawDialog({name:'杜宾',text:'好吧，烈夏这丫头比较例外，在战斗这方面，她确实不需要太担心。'});",
        "playground.drawDialog({name:'杜宾',text:'总之，这四个小姑娘申请的时候，阿米娅甚至想要强行不让她们通过的，只不过不知道为什么中途她改了主意。'});",
        "playground.drawDialog({name:'杜宾',text:'结果现在又来一个，她不在意我才觉得奇怪......'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:2});playground.drawDialog({name:'娜塔莉娅',text:'呼，休息得差不多了，罗莎琳，再陪我练习一会儿。'});",
        "playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:1});playground.drawDialog({name:'烈夏',text:'诶，你还真是顽强诶。'});",
        "playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:2});playground.drawDialog({name:'娜塔莉娅',text:'别小看我成为干员的决心。'});",
        "playground.drawCharacter({name:'char_194_rosali_1',name2:'char_197_poca_1',focus:1});playground.drawDialog({name:'烈夏',text:'好吧好吧。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'格瑞斯教官',text:'娜塔莉娅，你应该再休息一会儿，锻炼最重要的是恢复，一味地死磕只会让你的身体垮掉。'});",
        "playground.drawCharacter({name:'char_197_poca_1'});playground.drawDialog({name:'娜塔莉娅',text:'谢谢你，格瑞斯教官，不过我觉得我还能再坚持一下......'});",
        "playground.drawCharacter({});playground.drawDialog({name:'格瑞斯教官',text:'哎，你别怕杜宾，她虽然看起来很凶......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'格瑞斯，我听得到。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'格瑞斯教官',text:'诶，呃，总之你懂的。'});",
        "playground.drawCharacter({name:'char_197_poca_1'});playground.drawDialog({name:'娜塔莉娅',text:'嗯，总之请放心吧，撑不住的时候我会休息的。'});",
        "playground.drawCharacter({});playground.drawDialog({name:'格瑞斯教官',text:'好吧......'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'你觉得她怎么样？'});",
        "playground.Decision({options:[['1', '2', '3'], '她看起来很坚定。', '......', '她好拼命啊。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'在你看来她很坚定吗？我不这么认为。'});",
        "playground.drawDialog({name:'杜宾',text:'我见过很多这样的人，他们咬牙切齿，只是想让自己可以放弃思考。'});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'是不是让你想起了那三个小丫头？'});",
        "playground.drawDialog({name:'杜宾',text:'不知道哪里来的勇气，就敢在这个年纪咬着牙关向成年人的社会发起挑战。'});",
        "playground.drawDialog({name:'杜宾',text:'偏偏她们好像真的做好了准备。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'她确实很拼命，老实说，她出乎了我的意料。'});",
        "playground.drawDialog({name:'杜宾',text:'一个能够拼命锻炼自己的贵族大小姐......呵。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'我其实能够理解阿米娅不想让她们上战场的心情。'});",
        "playground.drawDialog({name:'杜宾',text:'博士，没有人会乐于看到这样的年轻人踏上战场，倒不如说，我这样的军人存在的意义，不正是为了保护她们的生活吗？'});",
        "playground.drawDialog({name:'杜宾',text:'我总是会想，让她们上战场是我的失职。'});",
        "playground.drawDialog({name:'杜宾',text:'但我也早就已经接受自己无法帮到每一个人的现实。'});",
        "playground.drawDialog({name:'杜宾',text:'我能做的，只有让她们学会战斗，学会保护自己，让她们在未来受更少的伤。'});",
        "playground.drawDialog({name:'杜宾',text:'好好想想，博士，你能为她们做到什么？'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({fadetime:3});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_corridor',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});playground.drawCharacter({name:'char_002_amiya_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'阿米娅',text:'博士，欢迎回来。'});",
        "playground.drawDialog({name:'阿米娅',text:'那么，博士的看法呢？'});",
        "voice.playMusic({intro:'m_avg_warm_intro', key:'m_avg_warm_loop', volume:0.4});playground.Decision({options:[['1'], '阿米娅是不是从凛冬她们身上看到了什么？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......是的，这也是我对她们比较关注的一个原因。'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'抱歉，博士，我之前......不太确定我是不是该把这个告诉别人。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'博士，你知道我的能力，当一个人拥有非常强烈的情感，并且指向我的时候，我是能够感受到对方的情感的。'});",
        "playground.drawDialog({name:'阿米娅',text:'如果不是指向我却足够强烈的话，我不会有很明显的感觉，但我还是能感受到一些。'});",
        "playground.drawDialog({name:'阿米娅',text:'而凛冬她们，我......很难说。'});",
        "playground.drawDialog({name:'阿米娅',text:'她们的状况不太一样。'});",
        "playground.drawDialog({name:'阿米娅',text:'某一些瞬间，一些对我们来说很普通、平常的瞬间，我却会在其中感觉到她们庞大的情感。'});",
        "playground.drawDialog({name:'阿米娅',text:'当然，她们之间的情感都不一样，但也有一些共通的地方。'});",
        "playground.drawDialog({name:'阿米娅',text:'如果一定要我给我感受到的情感取个名字，我想，可能应该是无助吧。'});",
        "playground.drawDialog({name:'阿米娅',text:'她们没有那么悲伤，没有那么痛苦，没有那么愤怒，没有那么绝望......'});",
        "playground.drawDialog({name:'阿米娅',text:'我不知道这样形容对不对，就好像，好像有一堵无形的墙。'});",
        "playground.drawDialog({name:'阿米娅',text:'平时的时候，这堵墙看不见、摸不着，但当她们想要前进时就会挡住她们，让她们原地踏步。'});",
        "playground.Decision({options:[['1'], '我们可以为她们做些什么吗？']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'不行的，博士。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'现在的我们没有立场去帮助她们，博士。'});",
        "playground.drawDialog({name:'阿米娅',text:'每个干员在登记档案时，她们愿意告诉我们的东西，就是我们“可以”了解的她们的一切了。'});",
        "playground.drawDialog({name:'阿米娅',text:'她们也许对我们隐瞒了什么，但如果是这样，我们就更没有理由一定要弄清。'});",
        "playground.drawDialog({name:'阿米娅',text:'当然，对罗德岛不利的事肯定不算在内啦，但我觉得至少凛冬她们肯定和这类事情无关。'});",
        "playground.drawDialog({name:'阿米娅',text:'而且......'});",
        "playground.drawDialog({name:'阿米娅',text:'我不觉得我们突然的帮助能够真的帮到她们。'});",
        "playground.Decision({options:[['1', '2', '3'], '擅自提供帮助是自我满足。', '......', '可以试试直接去问她们。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_3'});playground.drawDialog({name:'阿米娅',text:'嗯，我也是这么想的。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'也许这只是我单纯有些恐惧这么去做吧。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'噗，博士，你又在开玩笑了。'});",
        "playground.drawDialog({name:'阿米娅',text:'要是真的能够这么简单就好了呢。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'博士，我现在真的觉得，“我理解你”不是一句好话。'});",
        "playground.drawDialog({name:'阿米娅',text:'可许多人都爱这么说，就好像说了这句话之后，自己就尽到了安慰的义务，或者对方就会对自己敞开心扉一样。'});",
        "playground.drawDialog({name:'阿米娅',text:'理解别人的感情真的是一件很困难的事，更不要说帮助别人。'});",
        "playground.drawDialog({name:'阿米娅',text:'舰内的许多其他干员其实也是一样的。'});",
        "playground.drawDialog({name:'阿米娅',text:'我们没有与他们共享某一段经历，我们的话就传达不到他们，我们做的事哪怕正确，也不会是他们期望的。'});",
        "playground.Decision({options:[['1'], '所以你当时没有阻止凛冬她们成为干员。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'是的。'});",
        "playground.drawDialog({name:'阿米娅',text:'在察觉到她们的情绪后，我改变了自己的想法。'});",
        "playground.drawDialog({name:'阿米娅',text:'强制把她们保护起来也许在我们看来是对她们好，从结果来说可能也确实保护了她们。'});",
        "playground.drawDialog({name:'阿米娅',text:'但我想这样是没有办法治愈她们的。'});",
        "playground.drawDialog({name:'阿米娅',text:'博士，我不想，我真的不想说时间能够治愈一切。'});",
        "playground.drawDialog({name:'阿米娅',text:'但我没有办法，我不知道别的办法。'});",
        "playground.drawDialog({name:'阿米娅',text:'我能做的，只有尊重她们的选择，并且以我的，罗德岛的方法去保护她们。'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'其实就连这么去思考，我都觉得自己有些傲慢呢......'});",
        "playground.Decision({options:[['1', '2', '3'], '罗德岛不是温室，你能这么想已足够了。', '......', '那就和每个人都成为朋友吧。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'嗯，但我总是希望能多做一些。'});",
        "predicate = ['2'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'博士，怎么样才能治疗一个人，或者该不该去治疗她......从物理的角度来说，是很少需要考虑的事。'});",
        "playground.drawDialog({name:'阿米娅',text:'但是，精神层面的治疗，这就会变成一个困难的问题。'});",
        "playground.drawDialog({name:'阿米娅',text:'现在的我，只能给出这样模糊的答案。'});",
        "predicate = ['3'];",
        "playground.drawCharacter({name:'char_002_amiya_3'});playground.drawDialog({name:'阿米娅',text:'嗯，博士说得对呢。'});",
        "playground.drawDialog({name:'阿米娅',text:'这也是我的想法，如果没有立场去帮助别人，那就创造立场。'});",
        "playground.drawDialog({name:'阿米娅',text:'我只是稍微有些丧气而已。'});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'药是止痛的，是用来治疗伤口的，有的药也能够让人痊愈，但无论如何，在那之前受过的痛楚和折磨是不会消失的。'});",
        "playground.drawDialog({name:'阿米娅',text:'我总是在想，要是罗德岛能够让一些人，哪怕只是很少的人，能够忘记，或者至少愿意不去在意过去受过的伤就好了。'});",
        "playground.drawDialog({name:'阿米娅',text:'这一路走来，我发现，这果然还是很难的。'});",
        "playground.drawDialog({name:'阿米娅',text:'为了真正做到这一点，研制药物只是最基本的，我们还要做很多很多的事。'});",
        "playground.Decision({options:[['1'], '至少，我们已经在做了。']});",
        "predicate = ['1'];",
        "playground.drawCharacter({name:'char_002_amiya_3'});playground.drawDialog({name:'阿米娅',text:'嗯，至少，我们已经在做了。'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'谢谢你，博士。'});",
        "playground.drawDialog({name:'阿米娅',text:'明明是别人的事，感觉我却被博士安慰和鼓励了，感觉有些不好意思呢......'});",
        "playground.drawDialog({name:'阿米娅',text:'那么，这一次，我也同意娜塔莉娅小姐的申请吧。'});",
        "playground.drawCharacter({name:'char_002_amiya_3'});playground.drawDialog({name:'阿米娅',text:'希望有一天，她们愿意对我们敞开心扉。希望有一天，我们能够帮到她们。'});",
        "playground.drawDialog({name:'阿米娅',text:'希望有一天......罗德岛能成为她们的新家。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:3, block:true});playground.drawImage({});"
    ]
];