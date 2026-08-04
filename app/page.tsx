import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "理工サーキュラー｜日大理工の知と人を読む",
  description:
    "日本大学理工学部の研究、学生、キャンパスの今を、ウェブで読みやすく届ける理工サーキュラー。",
};

const awardStories = [
  {
    image: "/circular/bid-award.jpg",
    alt: "エリアマネジメント研究交流会で受賞した深津壮さん",
    category: "建築・都市",
    award: "Area Management Research Award",
    people: "建築学専攻　深津 壮さん",
    title: "海外の実験的BID制度から、日本のまちづくりへ",
    text: "シンガポールの「Pilot BID Programme」を、制度を試行・検証する実験的BIDとして分析。柔軟な負担金徴収と、政府による補助・伴走支援・調整機能の有効性を整理し、日本での制度普及に向けた政策提案まで踏み込みました。",
  },
  {
    image: "/circular/tree-project-team.jpg",
    alt: "樹木荘・樹木創・樹木葬を提案した学生チームと模型",
    category: "建築・デザイン",
    award: "日本建築学会設計競技 佳作・タジマ奨励賞",
    people: "海洋建築工学科　江口和李さん、川神爽来さん、藤井光稀さん、横山晃己さん",
    title: "団地がゆっくりと風景へ還る、新しい解体の物語",
    text: "植物の根の成長を利用し、暮らしが残る「荘期」、畑をつくる「創期」、自然に還る「葬期」の三段階で団地を解体。住民の生活と世代交代に寄り添いながら、建物が風景へ溶け込む過程を提案しました。",
  },
  {
    image: "/circular/cement-award.jpg",
    alt: "土木学会全国大会で優秀講演者に選ばれた廣瀬裕貴さん",
    category: "土木・環境",
    award: "土木学会全国大会 優秀講演者",
    people: "土木工学専攻　廣瀬裕貴さん",
    title: "混合セメントの耐久性とCO₂固定を読み解く",
    text: "産業副産物や廃ガラス微粉末を用いる混合セメントに着目。炭酸化による劣化プロセスと、供用中に吸収・固定できるCO₂量を調べ、長寿命化と環境負荷低減を両立するための知見を示しました。",
  },
];

const moreAwards = [
  {
    field: "航空宇宙 × AI",
    award: "Best Oral Presentation Award",
    person: "航空宇宙工学専攻　喜熨斗理央さん",
    title: "ニューラルネットワークで同軸二重反転ロータを制御する",
    text: "上下ロータ間の複雑な空力干渉を学習し、制御パラメータを決める手法を提案。数値シミュレーションで従来手法を上回る制御性能を示しました。",
  },
  {
    field: "機械加工",
    award: "砥粒加工学会 優秀講演賞",
    person: "機械工学専攻　野呂章仁さん",
    title: "研削砥石の仕上がりを左右する条件を可視化",
    text: "ツルーイング時の切込量が小さいほど砥粒の脱落と砥石摩耗が抑えられ、良好な仕上げ面が得られることを実験で明らかにしました。",
  },
  {
    field: "宇宙輸送",
    award: "日本設計工学会 学生優秀発表賞",
    person: "精密機械工学専攻　小野寺隆介さん",
    title: "空港から宇宙へ向かう機体の最適な飛行経路",
    text: "ジェットとロケットの燃焼モードを切り替える単段式サブオービタル宇宙機について、搭載量と効率を左右する切替条件と上昇経路を検討しました。",
  },
  {
    field: "電磁界・次世代通信",
    award: "電子情報通信学会 学生優秀発表賞",
    person: "電気工学専攻　向田智貴さん",
    title: "反強磁性体の超高速な動きを複合物理で解析",
    text: "スピンダイナミクスと電磁界を相互に扱う解析法を提案。THz帯で動作する次世代スピンデバイスへの応用可能性を示しました。",
  },
  {
    field: "省電力AI",
    award: "電気学会全国大会 優秀論文発表賞",
    person: "電子工学専攻　山口明伸さん",
    title: "脳のように履歴を保持する低消費電力回路",
    text: "スパイキングニューロンの発火頻度変動を使い、過去の情報を保持できることを確認。小型自律ロボットへの搭載を見据えた情報処理モデルです。",
  },
  {
    field: "サイバーセキュリティー",
    award: "全国型CTFコンテスト 東京会場1位",
    person: "応用情報工学科　髙士哲生さん",
    title: "謎解きで競う、実践的な防御と解析の力",
    text: "脆弱性解析、ネットワーク、暗号技術を継続的に学び、全国7会場とオンラインで同時開催された大会の東京会場で最高成績を収めました。",
  },
  {
    field: "化学工学",
    award: "分離技術会 学生賞・奨励賞",
    person: "物質応用化学専攻　山本 凌さん",
    title: "分けにくいグリーン溶媒を、抽出蒸留で分離する",
    text: "通常の蒸留では分けにくいメタノールとCPMEに第三の溶剤を加える方法を検討し、実測データから分離プロセスの成立性まで確かめました。",
  },
  {
    field: "交通工学",
    award: "Best Paper Presentation Award",
    person: "交通システム工学専攻　市川 遼さん",
    title: "大型車が信号交差点の容量に与える影響を実測",
    text: "大型車の混入で発進の遅れが増え、有効青時間も短くなる可能性を提示。従来の算定では交通容量を過大評価する場合があることを示しました。",
  },
  {
    field: "加速器科学",
    award: "Gold Award Hands-on Training",
    person: "物理学専攻　原田一輝さん",
    title: "極短パルスX線を、より高いエネルギーへ",
    text: "国際チームで3次元シミュレーションに取り組み、アンジュレータの条件を最適化。課題解決力と発表力を含む総合評価で18チーム中5チームに選ばれました。",
  },
];

const archive = [
  {
    no: "207",
    season: "2025 WINTER",
    title: "女性活躍応援企業を探してみよう！",
    image: "/circular/no207-cover.webp",
    tags: ["キャリア", "ダイバーシティ"],
  },
  {
    no: "206",
    season: "2025 AUTUMN",
    title: "日本大学の短期海外研修",
    image: "/circular/no206-cover.webp",
    tags: ["グローバル", "学生生活"],
  },
  {
    no: "205",
    season: "2025 SUMMER",
    title: "これ、何ですか？",
    image: "/circular/no205-cover.webp",
    tags: ["研究設備", "キャンパス"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へ移動
      </a>

      <header className="site-header">
        <div className="utility-bar">
          <div className="shell utility-inner">
            <p>日本大学理工学部 季刊広報誌</p>
            <nav aria-label="対象者別メニュー">
              <a href="https://www.cst.nihon-u.ac.jp/admission/">入学希望者</a>
              <a href="https://www.cst.nihon-u.ac.jp/graduates/">在学生・卒業生</a>
              <a href="https://www.cst.nihon-u.ac.jp/parents/">保護者</a>
            </nav>
          </div>
        </div>
        <div className="shell brand-row">
          <a className="brand" href="https://www.cst.nihon-u.ac.jp/" aria-label="日本大学理工学部公式サイト">
            <img src="/brand/cst-logo.svg" alt="日本大学理工学部" />
          </a>
          <p className="publication-name">
            <span>CIRCULAR</span>
            理工サーキュラー
          </p>
          <details className="mobile-menu">
            <summary>メニュー</summary>
            <nav aria-label="モバイルメニュー">
              <a href="#feature">特集</a>
              <a href="#contents">連載・研究室</a>
              <a href="#archive">バックナンバー</a>
              <a href="#about">サーキュラーについて</a>
            </nav>
          </details>
        </div>
        <nav className="global-nav" aria-label="理工サーキュラー メインメニュー">
          <div className="shell">
            <a href="#latest">最新号</a>
            <a href="#feature">特集</a>
            <a href="#contents">研究・ラボ</a>
            <a href="#archive">バックナンバー</a>
            <a href="#about">サーキュラーについて</a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="latest">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">CIRCULAR / WEB EDITION</p>
              <h1>
                知と人を、
                <br />
                ひらく。
              </h1>
              <p className="hero-lead">
                日大理工で生まれる発見と挑戦を、
                <br className="desktop-only" />
                誌面の枠を越えて、もっと読みやすく。
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#feature">
                  最新特集を読む <Arrow />
                </a>
                <a className="text-link" href="#contents">
                  No.208の記事一覧
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="cover-shadow" />
              <img
                className="latest-cover"
                src="/circular/no208-cover.webp"
                alt="理工サーキュラー No.208 この学会賞がスゴイ！表紙"
              />
              <p className="issue-stamp">
                <span>NEW ISSUE</span>
                VOL.56 / 2026 SPRING
              </p>
            </div>
          </div>
        </section>

        <nav className="topic-strip" aria-label="テーマから探す">
          <div className="shell topic-inner">
            <p>テーマから探す</p>
            <a href="#feature">研究・テクノロジー</a>
            <a href="#career">人・キャリア</a>
            <a href="#labs">研究室</a>
            <a href="#culture">キャンパスライフ</a>
          </div>
        </nav>

        <section className="feature-section" id="feature">
          <div className="shell">
            <header className="section-heading feature-heading">
              <div>
                <p className="eyebrow">FEATURE / No.208</p>
                <h2>
                  2025年度版
                  <br />
                  この学会賞がスゴイ！
                </h2>
              </div>
              <p>
                2025年に開催された学会や大会で受賞した日大理工生から、
                選りすぐりの成果を紹介します。
              </p>
            </header>

            <article className="lead-story">
              <figure>
                <img
                  src="/circular/stand-net-team.jpg"
                  alt="Stand NETを提案した学生チームと模型"
                />
                <figcaption>
                  杉本知優さん、岡俊輔さん、小泉温人さん、須藤大陽さん
                </figcaption>
              </figure>
              <div className="lead-story-body">
                <p className="story-kicker">環境・設備デザイン賞 入賞／BE賞</p>
                <h3>給油所から編み直す、しなやかな都市インフラ</h3>
                <p className="story-title">Stand NET — 給油所で編む、しなやかなまち</p>
                <p>
                  需要低迷が予測されるガソリンスタンドを都市の既存ストックとして捉え、平時はコミュニティー拠点、災害時は支援拠点となる場へ。キャノピー屋根や地下タンクを活かし、雨水・太陽光発電・蓄電設備を備えた新しい都市インフラを提案しました。
                </p>
                <div className="insight-grid">
                  <div>
                    <span>受賞のポイント</span>
                    <p>
                      事務所だけでなく、屋根や地下タンクまで含めた具体的な再利用と、周辺施設を結ぶネットワークの視点が評価されました。
                    </p>
                  </div>
                  <div className="accent-insight">
                    <span>ここがスゴイ！</span>
                    <p>
                      BE賞は公開審査会の参加者投票で決まる、建築と環境の総合性を象徴する賞です。
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <div className="story-grid">
              {awardStories.map((story) => (
                <article className="story-card" key={story.title}>
                  <div className="story-image-wrap">
                    <img src={story.image} alt={story.alt} />
                    <span>{story.category}</span>
                  </div>
                  <div className="story-card-body">
                    <p className="award-name">{story.award}</p>
                    <p className="story-people">{story.people}</p>
                    <h3>{story.title}</h3>
                    <p>{story.text}</p>
                    <a href="#award-index">
                      今号の受賞記事を続けて読む <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <section className="award-index" id="award-index" aria-labelledby="award-index-title">
              <div className="module-title award-index-heading">
                <div>
                  <p className="eyebrow">MORE AWARD STORIES</p>
                  <h3 id="award-index-title">分野を越えて広がる、9つの挑戦</h3>
                </div>
                <p>誌面の研究概要と受賞理由を、Web向けに短く再構成しました。</p>
              </div>
              <div className="award-index-grid">
                {moreAwards.map((story, index) => (
                  <article className="award-index-card" key={story.title}>
                    <div className="award-index-meta">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{story.field}</p>
                    </div>
                    <p className="award-index-award">{story.award}</p>
                    <h4>{story.title}</h4>
                    <p className="award-index-person">{story.person}</p>
                    <p>{story.text}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="issue-contents" id="contents">
          <div className="shell">
            <header className="section-heading compact-heading">
              <div>
                <p className="eyebrow">IN THIS ISSUE</p>
                <h2>No.208を読む</h2>
              </div>
              <p>特集以外の連載も、内容ごとに読みやすいWEB記事へ再編集します。</p>
            </header>

            <article className="research-feature" id="career">
              <div className="research-photo">
                <img
                  src="/circular/hashiguchi-research.jpg"
                  alt="フィールドワーク中の数学科教授 橋口徳一先生"
                />
                <span>MY RESEARCH HISTORY</span>
              </div>
              <div className="research-copy">
                <p className="eyebrow">私の研究歴 175</p>
                <h3>
                  力学系・葉層構造・群で
                  <br />
                  図形を調べる
                </h3>
                <p className="byline">数学科教授　橋口 徳一</p>
                <p>
                  家具職人だった父が木材からさまざまな形をつくる姿を見て育ち、中学校の初等幾何から図形の面白さへ。大学では位相幾何学、力学系、葉層構造へと研究を広げ、多くの研究者との出会いが新しい問いにつながっていきました。
                </p>
                <div className="research-highlights">
                  <div>
                    <span>研究の原点</span>
                    <p>定規とコンパスで描いた測地線の図が、修士研究の新しい結果につながりました。</p>
                  </div>
                  <div>
                    <span>人との接点</span>
                    <p>土曜トポロジーセミナーやフランス滞在を通じ、葉層構造・力学系・群の研究を発展させました。</p>
                  </div>
                  <div>
                    <span>学生と探る</span>
                    <p>巨大魔法陣や寺院の算額調査にも取り組み、図形を手で確かめる探究を続けています。</p>
                  </div>
                </div>
              </div>
            </article>

            <section className="labs" id="labs" aria-labelledby="labs-title">
              <div className="module-title">
                <div>
                  <p className="eyebrow">CST LAB CATALOG</p>
                  <h3 id="labs-title">研究室を訪ねる</h3>
                </div>
                <a href="#labs">研究室の記事一覧 <Arrow /></a>
              </div>
              <div className="lab-grid">
                <article className="lab-card">
                  <img src="/circular/mochizuki-lab.jpg" alt="階段に並ぶ仲村研究室のメンバー" />
                  <div>
                    <p>まちづくり工学科　仲村成貴教授</p>
                    <h4>仲村研究室</h4>
                    <span>ハードとソフトの両面から挑む 防災まちづくり</span>
                    <p className="lab-location">駿河台｜タワー・スコラ12階 S1213室</p>
                    <p className="lab-summary">
                      自然現象を「災害」に転じさせず、被害を最小限に抑える仕組みを研究。橋梁・杭基礎・ダムなどの健全性評価と、災害時の応急対応や避難行動の分析を組み合わせます。
                    </p>
                    <ul className="lab-points">
                      <li>構造物のモニタリングと耐震性能評価</li>
                      <li>VR・3D都市モデル・LiDARによる災害リスクの可視化</li>
                      <li>教員と学生が「一緒に考え、一緒に取り組む」研究スタイル</li>
                    </ul>
                  </div>
                </article>
                <article className="lab-card">
                  <img src="/circular/nakamura-lab.jpg" alt="室内に集まった望月研究室のメンバー" />
                  <div>
                    <p>応用情報工学科　望月寛教授</p>
                    <h4>望月研究室</h4>
                    <span>組込みシステムで安全・安心な暮らしを支える</span>
                    <p className="lab-location">船橋｜2号館4階 244室</p>
                    <p className="lab-summary">
                      ソフトウエアでハードウエアに新たな機能を与える組込みシステムを、鉄道信号などの産業システムへ応用。回路・ネットワーク・信号処理を横断して学びます。
                    </p>
                    <ul className="lab-points">
                      <li>鉄道信号の多情報化と高機能化</li>
                      <li>企業との共同研究で実システムへの応用を検討</li>
                      <li>展示会で学生自身がデモを説明し、技術者と議論</li>
                    </ul>
                  </div>
                </article>
              </div>
            </section>

            <section className="culture-row" id="culture" aria-labelledby="culture-title">
              <div className="culture-image">
                <img src="/circular/culture-exhibition.jpg" alt="学生研究展示のブース" />
              </div>
              <div className="culture-copy">
                <p className="eyebrow">CULTURE</p>
                <h3 id="culture-title">映画と展示会から、研究の外へ。</h3>
                <ul>
                  <li>
                    <span>MOVIE</span>
                    <div><strong>『BLUE GIANT』</strong><p>仲間と限界を越えていく熱量から、何かに打ち込むことの尊さを考える。</p></div>
                  </li>
                  <li>
                    <span>MOVIE</span>
                    <div><strong>『バック・トゥ・ザ・フューチャー』</strong><p>光・音響・通信・計測を支える電気工学と、科学技術が開く未来に目を向ける。</p></div>
                  </li>
                  <li>
                    <span>EVENT</span>
                    <div><strong>NEW環境展</strong><p>無機材料化学研究室が、CO₂固定化技術と炭酸カルシウムの有効利用を来場者へ紹介。</p></div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>

        <section className="archive-section" id="archive">
          <div className="shell">
            <header className="section-heading compact-heading">
              <div>
                <p className="eyebrow">BACK NUMBERS</p>
                <h2>バックナンバー</h2>
              </div>
              <p>号数だけでなく、テーマや掲載コーナーから記事を探せます。</p>
            </header>
            <div className="archive-layout">
              <article className="archive-latest">
                <img src="/circular/no208-cover.webp" alt="No.208 表紙" />
                <div>
                  <p>No.208 / 2026 SPRING</p>
                  <h3>2025年度版 この学会賞がスゴイ！</h3>
                  <a href="#feature">WEB記事を読む <Arrow /></a>
                </div>
              </article>
              <div className="archive-list">
                {archive.map((issue) => (
                  <article className="archive-item" key={issue.no}>
                    <img src={issue.image} alt={`No.${issue.no} 表紙`} />
                    <div>
                      <p>No.{issue.no}</p>
                      <h3>{issue.title}</h3>
                      <span>{issue.season}</span>
                      <ul aria-label="記事テーマ">
                        {issue.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <a className="button button-dark archive-button" href="#archive">
              すべての号・記事を探す <Arrow />
            </a>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="shell about-layout">
            <p className="about-mark">C</p>
            <div>
              <p className="eyebrow">ABOUT CIRCULAR</p>
              <h2>教員が企画し、日大理工の今を伝える。</h2>
              <p>
                「理工サーキュラー」は、日本大学理工学部の教員自らが企画・編集に携わり、学生に伝えたい知識や情報を発信する季刊広報誌です。研究の最新話題、社会課題、学生生活のヒントを、WEBならではの読みやすさで届けます。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-main">
          <img src="/brand/cst-logo.svg" alt="日本大学理工学部" />
          <div>
            <p>理工サーキュラー</p>
            <nav aria-label="フッターメニュー">
              <a href="#latest">最新号</a>
              <a href="#archive">バックナンバー</a>
              <a href="https://www.cst.nihon-u.ac.jp/contact/">お問い合わせ</a>
            </nav>
          </div>
        </div>
        <div className="shell footer-bottom">
          <p>© Nihon University</p>
          <p>掲載コンテンツの著作権は、原則として本学に帰属します。</p>
        </div>
      </footer>
    </>
  );
}
