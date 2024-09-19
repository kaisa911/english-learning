const vocabs = [
  {
    sentence: 'The system administrator scheduled a nightly job to backup all user data.',
    meaning: '系统管理员安排了一个夜间的定时任务来备份所有用户数据。',
    words: [
      {
        word: 'job',
        meaning: '工作，作业',
        type: '名词',
        notes: '一般是指工作，计算机里有 作业，批处理、定时任务的意思',
      },
      {
        word: 'administrator',
        meaning: '管理员',
        type: '名词',
        notes: '',
      },
      {
        word: 'schedule',
        meaning: 'n.时刻表、计划，v.安排、定于',
        type: '名词or动词',
        notes: '一般动词就',
      },
      {
        word: 'nightly',
        meaning: '每夜的，夜间的',
        type: '形容词',
        notes: '表示某个动作或事件在每个夜晚发生。',
      },
      {
        word: 'backup',
        meaning: '备份',
        type: '名词',
        notes: '指将数据复制到另一个存储介质上以防止数据丢失的过程。',
      },
    ],
  },
  {
    sentence:
      'The United States is a sports-minded country, with millions of fans who follow football, baseball, basketball and hockey, among other sports.',
    meaning:
      '美国是一个体育意识很强的国家，有数以百万计的球迷关注足球、棒球、篮球和曲棍球等体育运动。',
    words: [
      {
        word: 'sports-minded',
        meaning: '热爱体育的，注重体育的',
        type: '形容词',
        notes: '通常用来描述一个国家、社区或个人对体育运动的重视和兴趣。',
      },
      {
        word: 'millions',
        meaning: '数百万',
        type: '名词',
        notes: '用来表示一个非常大的数量，通常用于描述人数或事物的数量。',
      },
      {
        word: 'fans',
        meaning: '狂热爱好者，粉丝',
        type: '名词',
        notes: '指对某项活动、运动或名人有强烈兴趣和支持的人。',
      },
      {
        word: 'follow',
        meaning: '关注，追随',
        type: '动词',
        notes: '在体育语境中，通常指关注和支持某项运动或运动员。',
      },
      {
        word: 'among',
        meaning: '在...之中',
        type: '介词',
        notes: '用来指出一个列表中的一些项目，并暗示还有更多未列出的项目。',
      },
      {
        word: 'other sports',
        meaning: '其他运动',
        type: '名词短语',
        notes: '指除了前面提到的运动之外的其他运动项目。',
      },
    ],
  },
  {
    sentence:
      'The difference between proactive people and reactive people is that proactive people take initiative, and they come up with ideas to get things done despite the conditions they are in. Reactive people, on the other hand, usually are the ones to react to a situation rather than take initiative to create a situation.',
    meaning:
      '积极主动的人和消极被动的人之间的区别在于，积极主动的人会采取主动，无论他们所处的环境如何，都会想出办法来完成任务；而消极被动型的人通常只会对形势做出被动的反应，而不会主动采取行动去创造形势。',
    words: [
      {
        word: 'proactive',
        meaning: '积极主动的',
        type: '形容词',
        notes: '描述一个人主动采取行动，而不是等待事情发生。',
      },
      {
        word: 'reactive',
        meaning: '反应性的，被动的',
        type: '形容词',
        notes: '描述一个人倾向于对情况或刺激做出反应，而不是主动采取行动。',
      },
      {
        word: 'initiative',
        meaning: '主动性，首创精神',
        type: '名词',
        notes: '指个人采取主动的能力或意愿，通常是开始某事或推动事情发展的能力。',
      },
      {
        word: 'come up with',
        meaning: '想出，提出',
        type: '动词短语',
        notes: '指创造或提出新的想法、计划或解决方案。',
      },
      {
        word: 'despite',
        meaning: '尽管，不管',
        type: '介词',
        notes: '用来表示尽管有某种情况或困难，但仍然采取了某种行动或达到了某种结果。',
      },
      {
        word: 'conditions',
        meaning: '条件，环境',
        type: '名词',
        notes: '指影响某事发生或存在的情况或环境因素。',
      },
      {
        word: 'on the other hand',
        meaning: '另一方面',
        type: '短语',
        notes: '用来引出一个与前述情况相对比或相反的观点或事实。',
      },
      {
        word: 'react',
        meaning: '反应',
        type: '动词',
        notes: '指对某种情况、事件或刺激做出回应或回应的行为。',
      },
      {
        word: 'situation',
        meaning: '情况，状况',
        type: '名词',
        notes: '指特定的环境或一组特定条件下的事件。',
      },
    ],
  },
  {
    sentence: 'Don’t jump to conclusions! Perhaps it was his daughter he was dancing with.',
    meaning: '别匆忙下结论，和他跳舞的没准是他女儿呢。',
    words: [
      {
        word: 'jump to conclusions',
        meaning: '匆忙下结论',
        type: '动词短语',
        notes: '指在没有充分证据的情况下过早地做出判断或结论。',
      },
      {
        word: 'perhaps',
        meaning: '或许，可能',
        type: '副词',
        notes: '用来表示不确定性或可能性，提出一个假设或猜测。',
      },
      {
        word: 'daughter',
        meaning: '女儿',
        type: '名词',
        notes: '指某人的亲生女儿。',
      },
    ],
  },
  {
    sentence: 'The workers approached the manager with a request for shorter working hours.',
    meaning: '工人们找经理要求减少工作时间。',
    words: [
      {
        word: 'approached',
        meaning: '接近，靠近',
        type: '动词',
        notes: '在这里指的是工人们采取行动与经理沟通或提出要求。',
      },
      {
        word: 'manager',
        meaning: '经理，管理者',
        type: '名词',
        notes: '指负责管理公司或组织中某部分事务的人。',
      },
      {
        word: 'request',
        meaning: '请求，要求',
        type: '名词',
        notes: '指正式或非正式地要求得到某物或某事。',
      },
      {
        word: 'shorter',
        meaning: '更短的',
        type: '形容词',
        notes: '用来比较两个或多个事物的长度或持续时间。',
      },
      {
        word: 'working hours',
        meaning: '工作时间',
        type: '名词短语',
        notes: '指一个人在工作场所工作的时间。',
      },
    ],
  },
  {
    sentence: 'His sober approach to the crisis averted a catastrophe.',
    meaning: '他对危机的冷静处理避免了一场大灾难。',
    words: [
      {
        word: 'sober',
        meaning: '冷静的，清醒的',
        type: '形容词',
        notes: '形容人在面对困难或紧急情况时能够保持冷静和理智。',
      },
      {
        word: 'approach',
        meaning: '方法，方式',
        type: '名词',
        notes: '指处理问题或任务时所采取的策略或手段。',
      },
      {
        word: 'crisis',
        meaning: '危机，紧急关头',
        type: '名词',
        notes: '指需要立即采取行动以避免灾难或严重后果的紧急情况。',
      },
      {
        word: 'averted',
        meaning: '避免，防止',
        type: '动词',
        notes: '指成功地防止了某事的发生，通常是不好的事情。',
      },
      {
        word: 'catastrophe',
        meaning: '大灾难，灾难',
        type: '名词',
        notes: '指造成大量破坏或损失的事件，通常影响广泛。',
      },
    ],
  },
  {
    sentence:
      'They take the time to understand how the business works, how the product fits in, and what its goals are.',
    meaning:
      '他们会花时间去了解企业是如何商业运作的，产品又是如何配合商业运作，以及最终要达到什么样的商业目标。',
    words: [
      {
        word: 'take the time',
        meaning: '花时间',
        type: '动词短语',
        notes: '指投入必要的时间去做某事，通常是需要耐心和专注的事情。',
      },
      {
        word: 'understand',
        meaning: '理解，明白',
        type: '动词',
        notes: '指对某事物有深刻的认识和领会。',
      },
      {
        word: 'business',
        meaning: '商业，企业',
        type: '名词',
        notes: '指商业活动或企业组织。',
      },
      {
        word: 'works',
        meaning: '运作，工作',
        type: '名词',
        notes: '在这里指的是企业或商业活动的运作方式。',
      },
      {
        word: 'product',
        meaning: '产品',
        type: '名词',
        notes: '指企业生产或销售的物品或服务。',
      },
      {
        word: 'fits in',
        meaning: '适应，配合',
        type: '动词短语',
        notes: '指某物或某人适合于某个环境或体系，或与某事物相协调。',
      },
      {
        word: 'goals',
        meaning: '目标',
        type: '名词',
        notes: '指要达成的最终目的或标准。',
      },
    ],
  },
  {
    sentence: 'You need to work hard—opportunities don’t just come out of thin air.',
    meaning: '你得努力啦，机会不会凭空产生（天上不会掉馅饼）。',
    words: [
      {
        word: 'work hard',
        meaning: '努力工作',
        type: '动词短语',
        notes: '指投入大量的精力和时间，认真地去做某事。',
      },
      {
        word: 'opportunities',
        meaning: '机会',
        type: '名词',
        notes: '指有利的情况或时机，通常用来指成功或进步的可能性。',
      },
      {
        word: 'come out of thin air',
        meaning: '凭空出现',
        type: '动词短语',
        notes: '形容某事突然且意外地出现，没有明显的来源或原因。',
      },
    ],
  },
  {
    sentence:
      'He is empathetic with the jobless youth, as he was also struggling for a job in his early years.',
    meaning: '他对失业的年轻人感同身受，因为他自己早年也为找工作挣扎过。',
    words: [
      {
        word: 'empathetic',
        meaning: '有同情心的，能共鸣的',
        type: '形容词',
        notes: '指能够理解并感受到他人的情感和经历。',
      },
      {
        word: 'jobless',
        meaning: '失业的',
        type: '形容词',
        notes: '指没有工作或没有就业的人。',
      },
      {
        word: 'youth',
        meaning: '年轻人，青年',
        type: '名词',
        notes: '指年轻的一代人，通常指的是青少年或年轻人。',
      },
      {
        word: 'struggling',
        meaning: '挣扎，努力',
        type: '动词',
        notes: '指在困难或挑战中努力克服或取得进展。',
      },
      {
        word: 'early years',
        meaning: '早年，初期',
        type: '名词短语',
        notes: '指一个人生命中的早期阶段，通常指年轻时期。',
      },
    ],
  },
  {
    sentence:
      'Social media technologies have given companies access to an unprecedented flood of new analytics, metrics and user data.',
    meaning: '有了社交网络之后，企业获取了空前大量的新分析方法、度量指标和用户数据。',
    words: [
      {
        word: 'social media technologies',
        meaning: '社交媒体技术',
        type: '名词短语',
        notes: '指用于社交媒体平台的技术，如社交网络、博客、微博等。',
      },
      {
        word: 'unprecedented',
        meaning: '空前的，前所未有的',
        type: '形容词',
        notes: '指以前从未发生过或从未见过的，非常巨大或重要的。',
      },
      {
        word: 'flood',
        meaning: '大量，洪水',
        type: '名词',
        notes: '在这里比喻性地指大量的信息或数据。',
      },
      {
        word: 'analytics',
        meaning: '分析学，分析工具',
        type: '名词',
        notes: '指用于分析数据以提取有用信息的方法和技术。',
      },
      {
        word: 'metrics',
        meaning: '度量指标',
        type: '名词',
        notes: '指用于衡量、分析和评估性能或成果的标准化指标。',
      },
      {
        word: 'user data',
        meaning: '用户数据',
        type: '名词短语',
        notes: '指关于用户的信息，如个人信息、行为数据等。',
      },
    ],
  },
  {
    sentence:
      'Steve Jobs was a gifted communicator, and he used this skill to capture the attention of millions.',
    meaning: '乔布斯是一个有天赋的沟通者，他用这种技巧吸引了数百万人的注意力。',
    words: [
      {
        word: 'gifted',
        meaning: '有天赋的，有才华的',
        type: '形容词',
        notes: '指某人在某个领域具有非凡的才能或技能。',
      },
      {
        word: 'communicator',
        meaning: '沟通者，传达者',
        type: '名词',
        notes: '指能够有效地与他人交流思想、信息或感情的人。',
      },
      {
        word: 'capture',
        meaning: '捕获，吸引',
        type: '动词',
        notes: '在这里指的是成功地吸引并保持某人的注意力或兴趣。',
      },
      {
        word: 'attention',
        meaning: '注意力',
        type: '名词',
        notes: '指集中精神或意识的能力，对某事物给予关注。',
      },
      {
        word: 'millions',
        meaning: '数百万',
        type: '名词',
        notes: '指数量很大的一群人或事物。',
      },
    ],
  },
  {
    sentence:
      'Apple will unveil a 10-inch touchscreen tablet device in January, and ship the product in March.',
    meaning: '苹果将于一月份推出 10 英寸触屏平板电脑，并于三月份发货。',
    words: [
      {
        word: 'unveil',
        meaning: '揭幕，发布',
        type: '动词',
        notes: '指公开展示或介绍新产品、计划或其他事物。',
      },
      {
        word: 'touchscreen',
        meaning: '触摸屏',
        type: '名词',
        notes: '指一种允许用户通过触摸来操作的屏幕技术。',
      },
      {
        word: 'tablet',
        meaning: '平板电脑',
        type: '名词',
        notes: '指一种便携式计算机设备，通常具有触摸屏界面。',
      },
      {
        word: 'device',
        meaning: '设备',
        type: '名词',
        notes: '指用于特定目的的机械或电子装置。',
      },
      {
        word: 'ship',
        meaning: '发货',
        type: '动词',
        notes: '在这里指的是将产品从制造地运输到销售地或客户手中。',
      },
    ],
  },
  {
    sentence: 'We define an iteration as a phase or a milestone.',
    meaning: '我们将一次迭代定义为一个阶段或一个里程碑。',
    words: [
      {
        word: 'iteration',
        meaning: '迭代',
        type: '名词',
        notes: '在软件开发和其他领域中，指重复的过程，通常是为了改进或增加功能。',
      },
      {
        word: 'define',
        meaning: '定义',
        type: '动词',
        notes: '指明确某事物的本质特征或意义。',
      },
      {
        word: 'phase',
        meaning: '阶段',
        type: '名词',
        notes: '指一个过程或周期中的一个部分或时期。',
      },
      {
        word: 'milestone',
        meaning: '里程碑',
        type: '名词',
        notes: '指在发展过程中的一个显著事件或阶段，标志着重要的进展或成就。',
      },
    ],
  },
  {
    sentence: 'Her husband was unsympathetic and she felt she had no one to turn to.',
    meaning: '她的丈夫不懂得体恤人，她觉得无人可以依靠。',
    words: [
      {
        word: 'unsympathetic',
        meaning: '无同情心的，不体恤的',
        type: '形容词',
        notes: '指缺乏同情或理解，不表示关心或支持。',
      },
      {
        word: 'felt',
        meaning: '感觉',
        type: '动词',
        notes: "是 'feel' 的过去式，表示个人的情感体验或身体感受。",
      },
      {
        word: 'turn to',
        meaning: '求助于，依靠',
        type: '动词短语',
        notes: '指在需要帮助或支持时寻找某人或某物。',
      },
    ],
  },
  {
    sentence: 'Life is full of trade-offs. You cannot have your cake and eat it too.',
    meaning: '生活充满了取舍。鱼和熊掌不可兼得。',
    words: [
      {
        word: 'trade-offs',
        meaning: '权衡，折中',
        type: '名词',
        notes: '指在不同选择之间做出的取舍，通常需要放弃某些东西以获得其他东西。',
      },
      {
        word: 'cannot',
        meaning: '不能',
        type: '动词',
        notes: '表示没有能力做某事或某事不可能发生。',
      },
      {
        word: 'have your cake and eat it too',
        meaning: '想要两全其美，鱼和熊掌兼得',
        type: '习语',
        notes: '指想要保留某物同时又想使用或消耗它，通常用来说明不可能同时拥有两个相互矛盾的东西。',
      },
    ],
  },
  {
    sentence: 'Point Break was a breakout film for Kathryn Bigelow in 1991.',
    meaning: '凯瑟琳·毕格罗于 1991 年拍摄了《惊爆点》，该片突破了她之前的风格。',
    words: [
      {
        word: 'breakout',
        meaning: '突破性的，突围的',
        type: '形容词',
        notes: '通常用来形容某个作品、事件或人物突然获得成功或认可，突破了以往的限制或风格。',
      },
    ],
  },
  {
    sentence: 'I have little knowledge of computer and business, can I still learn Navisio?',
    meaning: '我对计算机和商业知之甚少，我还能学习 Navision 系统吗？',
  },
  {
    sentence: 'I was juggling books, shopping bags and the baby.',
    meaning: '我手里又是书，又是购物袋，还抱着孩子，跟演杂技一样。',
    words: [
      {
        word: 'juggling',
        meaning: '同时处理多个事物，杂耍',
        type: '动词',
        notes:
          '在这里形象地描述了一个人试图同时管理或携带许多不同的物品，就像杂技演员同时抛接多个球一样。',
      },
    ],
  },
  {
    sentence:
      'I’ve always felt that tragedy and comedy are two sides of the same coin. Love and hate are the opposite sides of the same coin.',
    meaning: '祸福相依、爱恨交织。/ 塞翁失马焉知非福。',
    words: [
      {
        word: 'two sides of the same coin',
        meaning: '同一事物的两个方面，祸福相依',
        type: '成语',
        notes: '用来描述两种看似相反但实际上是相辅相成或密切相关的情况。',
      },
    ],
  },
  {
    sentence: 'My computer keeps going funny.',
    meaning: '我的计算机老出故障。',
    words: [
      {
        word: 'going funny',
        meaning: '出现奇怪的问题，故障',
        type: '短语',
        notes: '非正式表达，用来描述电子设备或机器开始表现出不正常或意料之外的行为。',
      },
    ],
  },
  {
    sentence: 'The company continues to add new features to its software to meet customer needs.',
    meaning: '该公司持续为其软件添加新功能以满足客户需求。',
  },
  {
    sentence: 'She wrote the report by hand because her computer was broken.',
    meaning: '她因为电脑坏了，所以手工写了报告。',
  },
  {
    sentence: 'The new policy is aimed specifically at reducing pollution.',
    meaning: '新政策特别旨在减少污染。',
    words: [
      {
        word: 'aimed',
        meaning: '旨在，目标是',
        type: '形容词',
        notes: '描述某事物的特定目的或意图。',
      },
      {
        word: 'specifically',
        meaning: '特别地，明确地',
        type: '副词',
        notes: '用来强调某个动作或情况的特殊性或明确性。',
      },
      {
        word: 'reducing',
        meaning: '减少',
        type: '动词',
        notes: '指使某物变小、变少或降低的过程。',
      },
      {
        word: 'pollution',
        meaning: '污染',
        type: '名词',
        notes: '指自然环境中有害物质或因素的增加，导致环境质量下降。',
      },
    ],
  },
  {
    sentence:
      'The team is making progress on the project, and we expect to complete it by the end of the year.',
    meaning: '团队在项目上取得了进展，我们预计年底前完成。',
    words: [
      {
        word: 'progress',
        meaning: '进展，进步',
        type: '名词',
        notes: '指在某个任务或目标上向前发展的步骤或成就。',
      },
      {
        word: 'expect',
        meaning: '预期，期待',
        type: '动词',
        notes: '指基于现有信息或信念，认为某事将来会发生。',
      },
      {
        word: 'complete',
        meaning: '完成',
        type: '动词',
        notes: '指将某事做到结束，使变得完整。',
      },
      {
        word: 'end of the year',
        meaning: '年底',
        type: '短语',
        notes: '指一年中的最后一个时间点，通常是指十二月的最后一天。',
      },
    ],
  },
  {
    sentence:
      'The long-awaited movie finally premiered last night, and the audience gave it a standing ovation.',
    meaning: '期待已久的电影昨晚终于首映了，观众给予了起立鼓掌。',
    words: [
      {
        word: 'long-awaited',
        meaning: '期待已久的',
        type: '形容词',
        notes: '形容某事物被许多人期待了很长时间。',
      },
      {
        word: 'premiered',
        meaning: '首映',
        type: '动词',
        notes: '指电影、戏剧等首次公开演出。',
      },
      {
        word: 'standing ovation',
        meaning: '起立鼓掌',
        type: '名词短语',
        notes: '指观众对表演表示极高赞赏的一种方式，通过起立并鼓掌来表达。',
      },
    ],
  },
  {
    sentence: 'The new policy may be ready for implementation next month.',
    meaning: '新政策可能下个月准备实施。',
    words: [
      {
        word: 'implementation',
        meaning: '实施，执行',
        type: '名词',
        notes: '指将计划、政策或想法付诸行动的过程。',
      },
    ],
  },
  {
    sentence:
      "Looking at the progress we've made, we can confidently say that the project will be completed on time.",
    meaning: '考虑到我们取得的进展，我们可以自信地说项目将按时完成。',
    words: [
      {
        word: 'progress',
        meaning: '进展，进步',
        type: '名词',
        notes: '指在任务或目标上向前发展的步骤或成就。',
      },
      {
        word: 'confidently',
        meaning: '自信地',
        type: '副词',
        notes: '指有自信或确定性地做某事。',
      },
      {
        word: 'completed',
        meaning: '完成',
        type: '动词',
        notes: '指将某事做到结束，使变得完整。',
      },
      {
        word: 'on time',
        meaning: '按时',
        type: '副词短语',
        notes: '指在预定或约定的时间进行某事。',
      },
    ],
  },
  {
    sentence: 'The painting is almost done; it only needs the last finishing touches.',
    meaning: '这幅画几乎完成了；只需要最后的修饰。',
    words: [
      {
        word: 'finishing touches',
        meaning: '最后修饰，最后润色',
        type: '名词短语',
        notes: '指完成作品前的最后一些小的调整或润色工作。',
      },
    ],
  },
  {
    sentence: 'They are building a new highway towards the city to reduce traffic congestion.',
    meaning: '他们正在朝城市方向修建一条新高速公路，以减少交通拥堵。',
    words: [
      {
        word: 'highway',
        meaning: '高速公路',
        type: '名词',
        notes: '指连接城市、地区或国家的主要道路，通常有多个车道和中央分隔带。',
      },
      {
        word: 'reduce',
        meaning: '减少',
        type: '动词',
        notes: '指使数量、程度或规模变小。',
      },
      {
        word: 'traffic congestion',
        meaning: '交通拥堵',
        type: '名词短语',
        notes: '指道路上车辆过多，导致车辆行驶缓慢或停滞不前的情况。',
      },
    ],
  },
  {
    sentence:
      'In fact, since the project was approved, we have been working tirelessly to meet the deadline.',
    meaning: '事实上，自从项目获批后，我们一直在不懈地工作以满足截止日期。',
    words: [
      {
        word: 'approved',
        meaning: '批准的',
        type: '形容词',
        notes: '指经过官方或有关权威机构同意或认可的。',
      },
      {
        word: 'tirelessly',
        meaning: '不懈地，不疲倦地',
        type: '副词',
        notes: '形容工作或努力持续不断，不知疲倦。',
      },
      {
        word: 'meet',
        meaning: '满足，达到',
        type: '动词',
        notes: '在这里指达到预定的目标或要求，如截止日期。',
      },
      {
        word: 'deadline',
        meaning: '截止日期',
        type: '名词',
        notes: '指完成某项工作或任务的最晚期限。',
      },
    ],
  },
  {
    sentence:
      'The document was signed off by all parties involved, and the contract is now in effect.',
    meaning: '文件已由所有参与方签字同意，合同现在生效了。',
    words: [
      {
        word: 'signed off',
        meaning: '签字同意',
        type: '动词短语',
        notes: '指在文件或合同上签名以表示同意或批准。',
      },
      {
        word: 'parties involved',
        meaning: '参与方',
        type: '名词短语',
        notes: '指在某个事件、项目或合同中涉及的各方。',
      },
      {
        word: 'in effect',
        meaning: '生效',
        type: '形容词短语',
        notes: '指法律文件、合同或规定已经开始具有法律约束力，正式实施。',
      },
    ],
  },
];

const url = 'https://dict.youdao.com/dictvoice?audio=high&type=2';
