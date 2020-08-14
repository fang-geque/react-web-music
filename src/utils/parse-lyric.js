/**
 * 
  [00:01.259]《中国新说唱2020》
  [00:01.976]制作人CYPHER 《RAPSTAR》
  [00:02.824]制作人：陈令韬
  [00:03.808]作曲：吴亦凡 潘玮柏 张靓颖 GAI周延 朴宰范 陈令韬
  [00:04.591]作词：吴亦凡 潘玮柏 张靓颖 GAI周延 朴宰范
  [00:05.374]演唱：吴亦凡 潘玮柏 张靓颖 GAI周延 朴宰范
  [00:06.075]和声：陈令韬
  [00:06.808]编曲：陈令韬 AICHEN 顺德 大肥猫
  [00:07.558]吉他：廖凯 大肥猫
  [00:08.227]Vocal Producer： 仔总裁 姜皓天 陈令韬
  [00:09.008]录音工程：欧恒 姜皓天 老道 多斯 肖洒 吴身宝 李志鹏 陈令韬
  [00:09.942]混音助理：姜皓天 多斯 仔总裁 欧恒 陈令韬
  [00:10.642]混音：周天澈
  [00:11.358]母带：周天澈
  [00:12.108]混音室：STUDIO21A
  [00:12.925]母带室：STUDIO21A
*/

const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyric){
  const lineStrings = lyric.split("\n")
 
  const lyrics = [];
  for(let line of lineStrings){
    if (line) {
      const result = parseExp.exec(line);
      if (!result) continue;
      const time1 = result[1] * 60 * 1000 ;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3 ? result[3] * 1 : result * 10;
      const time = time1 + time2 + time3;
      const content = line.replace(parseExp,"").trim();
      const lineObj = {time, content}
      lyrics.push(lineObj);
    } else{}
  }
  return lyrics
}