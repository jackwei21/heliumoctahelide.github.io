var story = [
    [
        "bg_black",
        "bg_ltalley",
        "avg_npc_069_2",
        "char_367_swllow_3",
        "avg_npc_069_4",
        "char_367_swllow_1",
        "avg_npc_069_3",
        "avg_npc_067",
        "char_294_ayer",
        "char_345_folnic_3",
        "bg_ltstreet1",
        "avg_npc_068",
        "avg_npc_066_3",
        "char_358_lisa_1",
        "avg_npc_066",
        "char_345_folnic_4",
        "char_358_lisa_2",
        "char_358_lisa_4",
        "char_358_lisa_3",
        "char_345_folnic_5",
        "char_367_swllow_4"
    ],
    [
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro",
        "m_avg_plot_loop",
        "m_avg_plot_intro",
        "d_gen_fightgeneral",
        "e_skill_skulsrsword",
        "m_avg_frontline_loop",
        "m_avg_frontline_intro",
        "d_sp_ballista",
        "d_gen_walk_n"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();delay(1);blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_black',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({name:'塔佳娜',text:'唔......'});",
        "playground.drawDialog({name:'塔佳娜',text:'这里是......'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_ltalley',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.4});playground.drawCharacter({name:'avg_npc_069_2',fadetime:1,block:true});delay(1);background.cameraShake({duration:0.3, xstrength:8, ystrength:6, vibrato:30, randomness:30, fadeout:true, block:false});playground.drawDialog({name:'塔佳娜',text:'唔——！'});",
        "playground.drawDialog({name:'塔佳娜',text:'（头好晕......！视野......听力......还算正常。）'});",
        "playground.drawDialog({name:'塔佳娜',text:'（脚踝......失去知觉了。）'});",
        "playground.drawDialog({name:'塔佳娜',text:'（......好安静，其他人都离开了吗？）'});",
        "playground.drawDialog({name:'塔佳娜',text:'（......）'});",
        "playground.drawDialog({name:'塔佳娜',text:'（真的好安静......等等，敌人就这么把我放在这儿了？）'});",
        "playground.drawCharacter({name:'char_367_swllow_3'});playground.drawDialog({name:'灰喉',text:'......你醒了。'});",
        "playground.drawCharacter({name:'avg_npc_069_4'});background.cameraShake({duration:0.3, xstrength:8, ystrength:6, vibrato:30, randomness:30, fadeout:true, block:false});playground.drawDialog({name:'塔佳娜',text:'咿呀——！？'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_4',focus:1});playground.drawDialog({name:'灰喉',text:'......别这么紧张。'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_4',focus:2});playground.drawDialog({name:'塔佳娜',text:'啊、抱歉！突然被吓了一跳——'});",
        "playground.drawDialog({name:'塔佳娜',text:'欸？您、您是？我记得，您也是罗德岛的——'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_4',focus:1});playground.drawDialog({name:'灰喉',text:'干员，灰喉。'});",
        "playground.drawDialog({name:'灰喉',text:'小声点，这附近的叛乱者都被解决掉了。'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_2',focus:2});playground.drawDialog({name:'塔佳娜',text:'解决......'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_2',focus:1});playground.drawDialog({name:'灰喉',text:'......即使到了这个时候，你还是不希望把他们视作敌人。'});",
        "playground.drawDialog({name:'灰喉',text:'放心吧，基本都性命无忧，已经交给塞弗林·霍索恩长官了。'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_2',focus:2});playground.drawDialog({name:'塔佳娜',text:'......谢谢。'});",
        "playground.drawDialog({name:'塔佳娜',text:'啊——亚叶小姐她——'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_2',focus:1});playground.drawDialog({name:'灰喉',text:'她没事，其他干员去帮她了，只是......'});",
        "playground.drawDialog({name:'灰喉',text:'安托她真的......牺牲了吗？'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_2',focus:2});playground.drawDialog({name:'塔佳娜',text:'......嗯，很抱歉。'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_2',focus:1});playground.drawDialog({name:'灰喉',text:'所以亚叶才会是那副模样......'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_3',focus:2});playground.drawDialog({name:'塔佳娜',text:'只靠几名干员不可能收复这片街区，我们应该先撤回城镇中心，重整旗鼓。'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_3',focus:1});playground.drawDialog({name:'灰喉',text:'嗯，你能走吗？你的脚踝受伤了。'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_2',focus:2});playground.drawDialog({name:'塔佳娜',text:'啊......我试试看，疼......'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_2',focus:1});playground.drawDialog({name:'灰喉',text:'来，手给我。'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_2',focus:2});playground.drawDialog({name:'塔佳娜',text:'谢谢......'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_069_2',focus:1});voice.stopMusic({fadetime:2});playground.drawDialog({name:'灰喉',text:'——还有一个问题，塔佳娜小姐。我陪着安托抵达这里的时候，沃伦姆德还是一片繁荣。'});",
        "playground.drawDialog({name:'灰喉',text:'但为什么现在，沃伦姆德连一个正规宪兵都没有？'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});voice.playMusic({intro:'m_avg_plot_intro', key:'m_avg_plot_loop', volume:0.4});voice.playSound({key:'d_gen_fightgeneral'});background.cameraShake({duration:0.3, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});voice.playSound({key:'d_gen_fightgeneral'});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});blocker.blocker({a:1, r:1, g:1, b:1, afrom:0, rfrom:0, gfrom:0, bfrom:0, fadetime:0.1, block:true});voice.playSound({key:'e_skill_skulsrsword', volume:0.9});blocker.blocker({a:0, fadetime:1.5, block:false});background.cameraShake({duration:0.5, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:true});delay(1);playground.drawCharacter({name:'avg_npc_067'});playground.drawDialog({name:'叛乱的镇民',text:'唔！'});",
        "playground.drawCharacter({name:'char_294_ayer'});playground.drawDialog({name:'断崖',text:'放下武器，看看你自己，连套像样的装备都没有，就这样也打算战斗？'});",
        "playground.drawCharacter({name:'avg_npc_067'});playground.drawDialog({name:'叛乱的镇民',text:'你们这些外来者，到底懂什么！帮那些贵族爪牙，你们到底有什么好处！'});",
        "playground.drawCharacter({name:'char_345_folnic_3'});playground.drawDialog({name:'亚叶',text:'......没有好处，我也对你们的政治不感兴趣，但是......你是冬灵人吗？'});",
        "playground.drawCharacter({name:'avg_npc_067'});playground.drawDialog({name:'叛乱的镇民',text:'冬灵人——？哈，我才不是那种土著，但我的确认可他们的抗争！'});",
        "playground.drawDialog({name:'叛乱的镇民',text:'看看你们呢？安托医生是个好家伙，但你们呢？你们只是在帮他们落井下石！'});",
        "playground.drawDialog({name:'叛乱的镇民',text:'沃伦姆德——不，整个莱塔尼亚都是腐朽的！他们今天敢放火害死感染者，明天就会放火烧死所有的穷人！'});",
        "playground.drawCharacter({name:'char_345_folnic_3'});playground.drawDialog({name:'亚叶',text:'......'});",
        "playground.drawCharacter({name:'char_294_ayer'});playground.drawDialog({name:'断崖',text:'证据呢？'});",
        "playground.drawCharacter({name:'avg_npc_067'});playground.drawDialog({name:'叛乱的镇民',text:'——沃伦姆德一个宪兵都没有！一个！都没有！'});",
        "playground.drawDialog({name:'叛乱的镇民',text:'你知道为什么吗？'});",
        "playground.drawCharacter({name:'char_294_ayer'});playground.drawDialog({name:'断崖',text:'沃伦姆德和周遭的多个城镇组成了聚落，天灾来临，宪兵数量并不足以照顾到所有的——'});",
        "playground.drawCharacter({name:'avg_npc_067'});playground.drawDialog({name:'叛乱的镇民',text:'我呸！要真是这么正常的理由，谁会不满！？'});",
        "playground.drawCharacter({name:'char_345_folnic_3'});playground.drawDialog({name:'亚叶',text:'——别想拖延时间，说，还是不说？'});",
        "playground.drawCharacter({name:'avg_npc_067'});playground.drawDialog({name:'叛乱的镇民',text:'——哼。'});",
        "playground.drawDialog({name:'叛乱的镇民',text:'因为一场婚礼。'});",
        "playground.drawCharacter({name:'char_294_ayer'});playground.drawDialog({name:'断崖',text:'......婚礼？'});",
        "playground.drawCharacter({name:'avg_npc_067'});playground.drawDialog({name:'叛乱的镇民',text:'因为某个身居高塔之上的大贵族迎娶了另一位贵族的独女，所有的宪兵都被调往了最近的移动城邦！'});",
        "playground.drawDialog({name:'叛乱的镇民',text:'贵族的酒池肉林持续了多久？你猜猜看？'});",
        "playground.drawCharacter({name:'char_294_ayer'});playground.drawDialog({name:'断崖',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_067'});playground.drawDialog({name:'叛乱的镇民',text:'哦，对了，贵族们还争吵着哪一方才该开动移动城市去另一方的领土做客，争执了一个月之久——'});",
        "playground.drawDialog({name:'叛乱的镇民',text:'我们的宪兵队就那么被扣押在贵族的宅邸周围，为了牌面和名义上的安保，滑稽吗？可笑吗？'});",
        "playground.drawDialog({name:'叛乱的镇民',text:'——一点都不可笑。'});",
        "playground.drawCharacter({name:'char_345_folnic_3'});playground.drawDialog({name:'亚叶',text:'的确一点都不可笑，但我依旧没有听见关于火灾的线索。'});",
        "playground.drawCharacter({name:'avg_npc_067'});playground.drawDialog({name:'叛乱的镇民',text:'哼......'});",
        "playground.drawDialog({name:'叛乱的镇民',text:'......你觉得，谁会放火烧掉一座医治感染者的医疗营地？感染者自己吗？'});",
        "playground.drawDialog({name:'叛乱的镇民',text:'只有那些见不得感染者的人才会做这种事，你应该信任的人是我们——'});",
        "playground.drawDialog({name:'叛乱的镇民',text:'——信任“整合运动”！'});",
        "voice.stopMusic({fadetime:2});playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_ltstreet1',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:2, block:true});voice.playMusic({intro:'m_avg_frontline_intro', key:'m_avg_frontline_loop', volume:0.4});background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.25, block:true});playground.drawCharacter({name:'avg_npc_068'});playground.drawDialog({name:'镇民',text:'长官！叛徒们不愿意投降——！'});",
        "playground.drawCharacter({name:'avg_npc_066_3'});playground.drawDialog({name:'塞弗林',text:'他们的人并不多......'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n', volume:0.6});playground.drawCharacter({name:'char_367_swllow_1',fadetime:1,block:true});delay(1);playground.drawDialog({name:'灰喉',text:'但这场灾难真正可怕的地方在于，双方都不是战士，都只是普通的市民。'});",
        "playground.drawDialog({name:'灰喉',text:'我们该竭力避免最坏的情况发生。'});",
        "playground.drawCharacter({name:'char_358_lisa_1'});playground.drawDialog({name:'铃兰',text:'灰喉前辈！塔佳娜小姐！你们回来了！'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawCharacter({name:'char_345_folnic_3',fadetime:1,block:true});delay(1);playground.drawDialog({name:'亚叶',text:'......而我们要让这一切的罪魁祸首付出代价。'});",
        "playground.drawCharacter({name:'avg_npc_066'});playground.drawDialog({name:'塞弗林',text:'塔佳娜！'});",
        "playground.drawCharacter({name:'avg_npc_066', name2:'avg_npc_069_2',focus:2});playground.drawDialog({name:'塔佳娜',text:'伯父......抱歉，我疏忽了......'});",
        "playground.drawCharacter({name:'avg_npc_066', name2:'avg_npc_069_2',focus:1});playground.drawDialog({name:'塞弗林',text:'......不，你没事就好。'});",
        "playground.drawCharacter({name:'char_345_folnic_4', name2:'char_367_swllow_1',focus:2});playground.drawDialog({name:'灰喉',text:'干员亚叶......你也平安无事。'});",
        "playground.drawCharacter({name:'char_345_folnic_4', name2:'char_367_swllow_1',focus:1});playground.drawDialog({name:'亚叶',text:'灰喉......对，是你陪着安托抵达沃伦姆德的，我有印象......'});",
        "playground.drawDialog({name:'亚叶',text:'你知道发生什么了吗？'});",
        "playground.drawCharacter({name:'char_345_folnic_4', name2:'char_367_swllow_1',focus:2});playground.drawDialog({name:'灰喉',text:'......大致了解。'});",
        "playground.drawCharacter({name:'char_345_folnic_4', name2:'char_367_swllow_1',focus:1});playground.drawDialog({name:'亚叶',text:'你觉得......如果你在她的身边，能避免这场悲剧吗？'});",
        "playground.drawCharacter({name:'char_294_ayer', name2:'char_345_folnic_4',focus:1});playground.drawDialog({name:'断崖',text:'亚叶，你不该——'});",
        "playground.drawCharacter({name:'char_345_folnic_4', name2:'char_367_swllow_1',focus:2});playground.drawDialog({name:'灰喉',text:'不能。沃伦姆德所展露出的多样性矛盾有外力无法解决的困难，我们无能为力。'});",
        "playground.drawCharacter({name:'char_345_folnic_4', name2:'char_367_swllow_1',focus:1});playground.drawDialog({name:'亚叶',text:'......'});",
        "playground.drawCharacter({name:'char_345_folnic_4', name2:'char_367_swllow_1',focus:2});playground.drawDialog({name:'灰喉',text:'......但至少，我该陪着她竭尽全力。'});",
        "playground.drawDialog({name:'灰喉',text:'抱歉，我没陪在她身边......'});",
        "playground.drawCharacter({name:'char_345_folnic_4', name2:'char_367_swllow_1',focus:1});playground.drawDialog({name:'亚叶',text:'不......唉，只是为了让自己好受点还要为难你的，我到底在做什么......'});",
        "playground.drawDialog({name:'亚叶',text:'该道歉的人是我。'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n', volume:0.6});playground.drawCharacter({name:'avg_npc_066',fadetime:1,block:true});delay(1);playground.drawDialog({name:'塞弗林',text:'......各位。'});",
        "playground.drawDialog({name:'塞弗林',text:'先容我道一句谢，感谢罗德岛救下了塔佳娜......'});",
        "playground.drawCharacter({name:'avg_npc_066', name2:'char_345_folnic_3',focus:2});playground.drawDialog({name:'亚叶',text:'......罗德岛，是救助感染者为己任的组织。'});",
        "playground.drawDialog({name:'亚叶',text:'塞弗林·霍索恩，因为莱塔尼亚一直以来的举措的确让人松懈，但我依旧要问，要在我们正式开始行动之前质询你——'});",
        "playground.drawDialog({name:'亚叶',text:'你是否能代表沃伦姆德，保证沃伦姆德没有在特殊情况下，对感染者采取了“额外措施”？'});",
        "playground.drawCharacter({name:'avg_npc_066', name2:'char_345_folnic_3',focus:1});playground.drawDialog({name:'塞弗林',text:'......铃兰小姐和你的调查应该可以佐证这一点。'});",
        "playground.drawDialog({name:'塞弗林',text:'沃伦姆德绝无针对感染者的意思，也绝不会因此对救助感染者的安托医生怀恨在心。'});",
        "playground.drawDialog({name:'塞弗林',text:'你能满意吗？'});",
        "playground.drawCharacter({name:'avg_npc_066', name2:'char_345_folnic_3',focus:2});playground.drawDialog({name:'亚叶',text:'......'});",
        "playground.drawCharacter({name:'char_358_lisa_2', name2:'char_345_folnic_3',focus:1});playground.drawDialog({name:'铃兰',text:'亚叶姐姐，我相信塞弗林长官。'});",
        "playground.drawCharacter({name:'char_358_lisa_2', name2:'char_294_ayer',focus:2});playground.drawDialog({name:'断崖',text:'为什么？'});",
        "playground.drawCharacter({name:'char_358_lisa_4', name2:'char_294_ayer',focus:1});playground.drawDialog({name:'铃兰',text:'欸......那个......还不能说！但是我相信他！他不是会针对感染者的人！'});",
        "playground.drawCharacter({name:'char_358_lisa_4', name2:'char_345_folnic_4',focus:2});playground.drawDialog({name:'亚叶',text:'丽萨......那么，我暂且相信你的态度。'});",
        "playground.drawCharacter({name:'avg_npc_066'});playground.drawDialog({name:'塞弗林',text:'感谢理解。'});",
        "playground.drawDialog({name:'塞弗林',text:'以及，我想听听各位的意见，下一步该怎么做。'});",
        "playground.drawCharacter({name:'char_367_swllow_1', name2:'avg_npc_066',focus:1});playground.drawDialog({name:'灰喉',text:'......我对现场的情况了解并不如亚叶干员，作战任务时，我听从亚叶干员的指示。'});",
        "playground.drawCharacter({name:'avg_npc_066', name2:'char_345_folnic_3',focus:2});playground.drawDialog({name:'亚叶',text:'他们，人并不多。'});",
        "playground.drawDialog({name:'亚叶',text:'算上已经成功制伏的这些人，他们可能不过百来号人罢了。'});",
        "playground.drawCharacter({name:'avg_npc_066', name2:'char_345_folnic_3',focus:1});playground.drawDialog({name:'塞弗林',text:'对于平常的沃伦姆德而言，百来个暴徒不足为惧......'});",
        "playground.drawCharacter({name:'avg_npc_066', name2:'char_345_folnic_3',focus:2});playground.drawDialog({name:'亚叶',text:'关于宪兵的事情，我听说了一些有趣的传闻。'});",
        "playground.drawCharacter({name:'avg_npc_066', name2:'char_345_folnic_3',focus:1});playground.drawDialog({name:'塞弗林',text:'——那也是我从军生涯中为数不多的荒诞决定，改变不了的事情能暂时搁置吗？'});",
        "playground.drawCharacter({name:'char_294_ayer'});playground.drawDialog({name:'断崖',text:'容我打断一下，告诉我们传闻的那个俘虏，自称“整合运动”。'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_294_ayer',focus:1});playground.drawDialog({name:'铃兰',text:'欸？'});",
        "playground.drawCharacter({name:'char_294_ayer'});playground.drawDialog({name:'灰喉',text:'......我们曾经接触过某个单独的整合运动成员，他和这些因为各种原因义愤填膺的市民，完全没有可比性。'});",
        "playground.drawDialog({name:'灰喉',text:'他是个久经沙场的战士，如果他那样的家伙有一支小队，会很棘手。'});",
        "playground.drawCharacter({name:'avg_npc_066'});playground.drawDialog({name:'塞弗林',text:'那些武装分子......这可不算什么好消息。'});",
        "playground.drawCharacter({name:'char_345_folnic_3'});playground.drawDialog({name:'亚叶',text:'......整合运动......'});",
        "playground.drawDialog({name:'亚叶',text:'切尔诺伯格的事......乌萨斯的事......啊，又是乌萨斯......'});",
        "playground.drawCharacter({name:'char_345_folnic_5'});background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:60, fadeout:true, block:false});playground.drawDialog({name:'亚叶',text:'我怎么会信他们一个字！'});",
        "playground.drawCharacter({name:'char_367_swllow_3'});playground.drawDialog({name:'灰喉',text:'......'});",
        "playground.drawCharacter({name:'char_294_ayer'});playground.drawDialog({name:'断崖',text:'那场火灾是一切的导火索，但到目前为止，冲突的可能性太多了。'});",
        "playground.drawDialog({name:'断崖',text:'到底是这些问题导致了那场火灾，还是那场火灾暴露了这些问题，仅此而已？'});",
        "playground.drawCharacter({name:'avg_npc_069_2'});playground.drawDialog({name:'塔佳娜',text:'我们......我们只能开战了吗？'});",
        "playground.drawCharacter({name:'avg_npc_066'});playground.drawDialog({name:'塞弗林',text:'......这将是敲定沃伦姆德命运的选择。几千条人命不能这么草率地决定。'});",
        "playground.drawCharacter({name:'avg_npc_066'});playground.drawDialog({name:'塞弗林',text:'我们应当先回到议事厅做出正式决议。'});",
        "playground.clearDialog();playground.drawCharacter({});background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.25, block:true});background.cameraShake({duration:1, xstrength:8, ystrength:6, vibrato:30, randomness:90, fadeout:true, block:false});blocker.blocker({a:0.7, r:0.95, g:0.95, b:0.95, fadetime:0.02, block:true});voice.playSound({key:'d_sp_ballista'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.25, block:true});delay(1);playground.drawCharacter({name:'avg_npc_066'});playground.drawDialog({name:'塞弗林',text:'欸......但是对方好像不太愿意给我们这个机会......'});",
        "playground.drawCharacter({name:'char_345_folnic_3'});playground.drawDialog({name:'亚叶',text:'......如果他们真的是“整合运动”，我们不需要手下留情。'});",
        "playground.drawCharacter({name:'char_294_ayer'});playground.drawDialog({name:'断崖',text:'......'});",
        "playground.drawCharacter({name:'char_345_folnic_3', name2:'char_367_swllow_1',focus:2});playground.drawDialog({name:'灰喉',text:'......明白。但是亚叶干员，你应当留在这里治疗伤员。'});",
        "playground.drawCharacter({name:'char_345_folnic_3', name2:'char_367_swllow_1',focus:1});playground.drawDialog({name:'亚叶',text:'我要亲自——'});",
        "playground.drawCharacter({name:'char_345_folnic_3', name2:'char_367_swllow_4',focus:2});playground.drawDialog({name:'灰喉',text:'丽萨，铃兰干员并不是正式的医疗干员，只有你是。'});",
        "playground.drawCharacter({name:'char_345_folnic_3', name2:'char_367_swllow_3',focus:2});playground.drawDialog({name:'灰喉',text:'你应当优先保护无辜的民众，而不是优先击溃敌人。'});",
        "playground.drawCharacter({name:'char_345_folnic_4', name2:'char_367_swllow_1',focus:1});playground.drawDialog({name:'亚叶',text:'我......'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_4',focus:1});playground.drawDialog({name:'铃兰',text:'亚叶姐姐......你应该留在这里。'});",
        "playground.drawDialog({name:'铃兰',text:'如果亚叶姐姐总是气势汹汹地战斗下去......就会变得不像是亚叶姐姐了。'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_4',focus:2});playground.drawDialog({name:'亚叶',text:'......'});",
        "playground.drawCharacter({name:'char_345_folnic_3'});playground.drawDialog({name:'亚叶',text:'......那就......好吧，我......我留下。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1, block:true});playground.drawCharacter({});playground.drawImage({});"
    ]
];