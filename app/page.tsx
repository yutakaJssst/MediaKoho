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
    title: "海外の実験的BID制度から、日本のまちづくりへ",
    text: "シンガポールの制度を詳細に分析し、日本でのエリアマネジメント活用に向けた具体的な政策提案まで踏み込みました。",
  },
  {
    image: "/circular/tree-project-team.jpg",
    alt: "樹木荘・樹木創・樹木葬を提案した学生チームと模型",
    category: "建築・デザイン",
    award: "日本建築学会設計競技 佳作・タジマ奨励賞",
    title: "団地がゆっくりと風景へ還る、新しい解体の物語",
    text: "植物の根の成長を利用し、暮らしを残しながら建物を自然へ還す「穏やかな解体」を提案しました。",
  },
  {
    image: "/circular/cement-award.jpg",
    alt: "土木学会全国大会で優秀講演者に選ばれた廣瀬裕貴さん",
    category: "土木・環境",
    award: "土木学会全国大会 優秀講演者",
    title: "混合セメントの耐久性とCO₂固定を読み解く",
    text: "混和材による組成変化と劣化の関係を実験で検証し、長寿命化と環境負荷低減を両立する知見を示しました。",
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
                    <h3>{story.title}</h3>
                    <p>{story.text}</p>
                    <a href="#feature">
                      研究ストーリーを読む <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
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
                  いろいろな図形と、たくさんの方々との出会い。数学に向き合ってきた研究の歩みを、写真とともにたどります。
                </p>
                <a className="button button-outline" href="#career">
                  研究歴を読む <Arrow />
                </a>
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
                  <img src="/circular/nakamura-lab.jpg" alt="仲村研究室のメンバー" />
                  <div>
                    <p>交通システム工学科</p>
                    <h4>仲村研究室</h4>
                    <span>ハードとソフトの融合から創る「未来をつくる」</span>
                  </div>
                </article>
                <article className="lab-card">
                  <img src="/circular/mochizuki-lab.jpg" alt="望月研究室のメンバー" />
                  <div>
                    <p>精密機械工学科</p>
                    <h4>望月研究室</h4>
                    <span>ロボットシステムで暮らしと社会を支える</span>
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
                <h3 id="culture-title">研究の外側にも、好奇心を。</h3>
                <ul>
                  <li>
                    <span>MOVIE</span>
                    映画から考える科学と未来
                  </li>
                  <li>
                    <span>BOOK</span>
                    教員・学生が選ぶ今号の一冊
                  </li>
                  <li>
                    <span>EVENT</span>
                    第69回理工学部学術講演会レポート
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
