"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[9475],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),r=a(79443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(86010),l="tabItem_vU9c",s="tabItemActive_cw6a";var p=37,d=39;var u=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,u=e.values,c=e.groupId,m=e.className,h=i(),k=h.tabGroupChoices,g=h.setTabGroupChoices,N=(0,n.useState)(r),f=N[0],b=N[1],v=n.Children.toArray(e.children),w=[];if(null!=c){var y=k[c];null!=y&&y!==f&&u.some((function(e){return e.value===y}))&&b(y)}var _=function(e){var t=e.currentTarget,a=w.indexOf(t),n=u[a].value;b(n),null!=c&&(g(c,n),setTimeout((function(){var e,a,n,r,i,o,l,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,p=o.innerWidth,a>=0&&i<=p&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case d:var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case p:var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:_,onClick:_},a)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},7783:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(55064),l=a(58215),s=["components"],p={title:"Writing Data",keywords:["hudi","incremental","batch","stream","processing","Hive","ETL","Spark SQL"],summary:"In this page, we will discuss some available tools for incrementally ingesting & storing data.",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},d=void 0,u={unversionedId:"writing_data",id:"writing_data",isDocsHomePage:!1,title:"Writing Data",description:"In this section, we will cover ways to ingest new changes from external sources or even other Hudi tables.",source:"@site/docs/writing_data.md",sourceDirName:".",slug:"/writing_data",permalink:"/docs/next/writing_data",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/docs/docs/writing_data.md",version:"current",frontMatter:{title:"Writing Data",keywords:["hudi","incremental","batch","stream","processing","Hive","ETL","Spark SQL"],summary:"In this page, we will discuss some available tools for incrementally ingesting & storing data.",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"SQL DDL",permalink:"/docs/next/table_management"},next:{title:"Streaming Ingestion",permalink:"/docs/next/hoodie_deltastreamer"}},c=[{value:"Spark Datasource Writer",id:"spark-datasource-writer",children:[{value:"Insert Overwrite Table",id:"insert-overwrite-table",children:[]},{value:"Insert Overwrite",id:"insert-overwrite",children:[]},{value:"Deletes",id:"deletes",children:[]},{value:"Concurrency Control",id:"concurrency-control",children:[]}]},{value:"Flink SQL Writer",id:"flink-sql-writer",children:[]}],m={toc:c};function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, we will cover ways to ingest new changes from external sources or even other Hudi tables.\nThe two main tools available are the ",(0,i.kt)("a",{parentName:"p",href:"#deltastreamer"},"DeltaStreamer")," tool, as well as the ",(0,i.kt)("a",{parentName:"p",href:"#datasource-writer"},"Spark Hudi datasource"),"."),(0,i.kt)("h2",{id:"spark-datasource-writer"},"Spark Datasource Writer"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"hudi-spark")," module offers the DataSource API to write (and read) a Spark DataFrame into a Hudi table. There are a number of options available:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"HoodieWriteConfig")),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TABLE_NAME")," (Required)",(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"DataSourceWriteOptions")),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"RECORDKEY_FIELD_OPT_KEY")," (Required): Primary key field(s). Record keys uniquely identify a record/row within each partition. If one wants to have a global uniqueness, there are two options. You could either make the dataset non-partitioned, or, you can leverage Global indexes to ensure record keys are unique irrespective of the partition path. Record keys can either be a single column or refer to multiple columns. ",(0,i.kt)("inlineCode",{parentName:"p"},"KEYGENERATOR_CLASS_OPT_KEY")," property should be set accordingly based on whether it is a simple or complex key. For eg: ",(0,i.kt)("inlineCode",{parentName:"p"},'"col1"')," for simple field, ",(0,i.kt)("inlineCode",{parentName:"p"},'"col1,col2,col3,etc"')," for complex field. Nested fields can be specified using the dot notation eg: ",(0,i.kt)("inlineCode",{parentName:"p"},"a.b.c"),". ",(0,i.kt)("br",null),"\nDefault value: ",(0,i.kt)("inlineCode",{parentName:"p"},'"uuid"'),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PARTITIONPATH_FIELD_OPT_KEY")," (Required): Columns to be used for partitioning the table. To prevent partitioning, provide empty string as value eg: ",(0,i.kt)("inlineCode",{parentName:"p"},'""'),". Specify partitioning/no partitioning using ",(0,i.kt)("inlineCode",{parentName:"p"},"KEYGENERATOR_CLASS_OPT_KEY"),". If partition path needs to be url encoded, you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"URL_ENCODE_PARTITIONING_OPT_KEY"),". If synchronizing to hive, also specify using ",(0,i.kt)("inlineCode",{parentName:"p"},"HIVE_PARTITION_EXTRACTOR_CLASS_OPT_KEY."),(0,i.kt)("br",null),"\nDefault value: ",(0,i.kt)("inlineCode",{parentName:"p"},'"partitionpath"'),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PRECOMBINE_FIELD_OPT_KEY")," (Required): When two records within the same batch have the same key value, the record with the largest value from the field specified will be choosen. If you are using default payload of OverwriteWithLatestAvroPayload for HoodieRecordPayload (",(0,i.kt)("inlineCode",{parentName:"p"},"WRITE_PAYLOAD_CLASS"),"), an incoming record will always takes precendence compared to the one in storage ignoring this ",(0,i.kt)("inlineCode",{parentName:"p"},"PRECOMBINE_FIELD_OPT_KEY"),". ",(0,i.kt)("br",null),"\nDefault value: ",(0,i.kt)("inlineCode",{parentName:"p"},'"ts"'),(0,i.kt)("br",null)),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OPERATION_OPT_KEY"),": The ",(0,i.kt)("a",{parentName:"p",href:"#write-operations"},"write operations")," to use.",(0,i.kt)("br",null),"\nAvailable values:",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"UPSERT_OPERATION_OPT_VAL")," (default), ",(0,i.kt)("inlineCode",{parentName:"p"},"BULK_INSERT_OPERATION_OPT_VAL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT_OPERATION_OPT_VAL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE_OPERATION_OPT_VAL")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TABLE_TYPE_OPT_KEY"),": The ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts#table-types"},"type of table")," to write to. Note: After the initial creation of a table, this value must stay consistent when writing to (updating) the table using the Spark ",(0,i.kt)("inlineCode",{parentName:"p"},"SaveMode.Append")," mode.",(0,i.kt)("br",null),"\nAvailable values:",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts#copy-on-write-table"},(0,i.kt)("inlineCode",{parentName:"a"},"COW_TABLE_TYPE_OPT_VAL"))," (default), ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts#merge-on-read-table"},(0,i.kt)("inlineCode",{parentName:"a"},"MOR_TABLE_TYPE_OPT_VAL"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"KEYGENERATOR_CLASS_OPT_KEY"),": Refer to ",(0,i.kt)("a",{parentName:"p",href:"#key-generation"},"Key Generation")," section below."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HIVE_PARTITION_EXTRACTOR_CLASS_OPT_KEY"),": If using hive, specify if the table should or should not be partitioned.",(0,i.kt)("br",null),"\nAvailable values:",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"classOf[SlashEncodedDayPartitionValueExtractor].getCanonicalName")," (default), ",(0,i.kt)("inlineCode",{parentName:"p"},"classOf[MultiPartKeysValueExtractor].getCanonicalName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"classOf[TimestampBasedKeyGenerator].getCanonicalName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"classOf[NonPartitionedExtractor].getCanonicalName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"classOf[GlobalDeleteKeyGenerator].getCanonicalName")," (to be used when ",(0,i.kt)("inlineCode",{parentName:"p"},"OPERATION_OPT_KEY")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE_OPERATION_OPT_VAL"),")"),(0,i.kt)("p",null,"Example:\nUpsert a DataFrame, specifying the necessary field names for ",(0,i.kt)("inlineCode",{parentName:"p"},"recordKey => _row_key"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"partitionPath => partition"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"precombineKey => timestamp")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'inputDF.write()\n       .format("org.apache.hudi")\n       .options(clientOpts) //Where clientOpts is of type Map[String, String]. clientOpts can include any other options necessary.\n       .option(DataSourceWriteOptions.RECORDKEY_FIELD_OPT_KEY(), "_row_key")\n       .option(DataSourceWriteOptions.PARTITIONPATH_FIELD_OPT_KEY(), "partition")\n       .option(DataSourceWriteOptions.PRECOMBINE_FIELD_OPT_KEY(), "timestamp")\n       .option(HoodieWriteConfig.TABLE_NAME, tableName)\n       .mode(SaveMode.Append)\n       .save(basePath);\n')),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"},{label:"SparkSQL",value:"sparksql"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("p",null,"Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi table as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Overwrite).\n  save(basePath)\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"mode(Overwrite)")," overwrites and recreates the table if it already exists.\nYou can check the data generated under ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/hudi_trips_cow/<region>/<country>/<city>/"),". We provided a record key\n(",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58"},"schema"),"), partition field (",(0,i.kt)("inlineCode",{parentName:"p"},"region/country/city"),") and combine logic (",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58"},"schema"),") to ensure trip records are unique within each partition. For more info, refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=113709185#FAQ-HowdoImodelthedatastoredinHudi"},"Modeling data stored in Hudi"),"\nand for info on ways to ingest data into Hudi, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data"},"Writing Hudi Tables"),".\nHere we are using the default write operation : ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert"),". If you have a workload without updates, you can also issue\n",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bulk_insert")," operations which could be faster. To know more, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data#write-operations"},"Write operations"))))),(0,i.kt)(l.Z,{value:"python",mdxType:"TabItem"},"Generate some new trips, load them into a DataFrame and write the DataFrame into the Hudi table as below.",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# pyspark\ninserts = sc._jvm.org.apache.hudi.QuickstartUtils.convertToStringList(dataGen.generateInserts(10))\ndf = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\n\nhudi_options = {\n    'hoodie.table.name': tableName,\n    'hoodie.datasource.write.recordkey.field': 'uuid',\n    'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n    'hoodie.datasource.write.table.name': tableName,\n    'hoodie.datasource.write.operation': 'upsert',\n    'hoodie.datasource.write.precombine.field': 'ts',\n    'hoodie.upsert.shuffle.parallelism': 2,\n    'hoodie.insert.shuffle.parallelism': 2\n}\n\ndf.write.format(\"hudi\").\n    options(**hudi_options).\n    mode(\"overwrite\").\n    save(basePath)\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"mode(Overwrite)")," overwrites and recreates the table if it already exists.\nYou can check the data generated under ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp/hudi_trips_cow/<region>/<country>/<city>/"),". We provided a record key\n(",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58"},"schema"),"), partition field (",(0,i.kt)("inlineCode",{parentName:"p"},"region/country/city"),") and combine logic (",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-spark/src/main/java/org/apache/hudi/QuickstartUtils.java#L58"},"schema"),") to ensure trip records are unique within each partition. For more info, refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/pages/viewpage.action?pageId=113709185#FAQ-HowdoImodelthedatastoredinHudi"},"Modeling data stored in Hudi"),"\nand for info on ways to ingest data into Hudi, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data"},"Writing Hudi Tables"),".\nHere we are using the default write operation : ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert"),". If you have a workload without updates, you can also issue\n",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bulk_insert")," operations which could be faster. To know more, refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/writing_data#write-operations"},"Write operations"))))),(0,i.kt)(l.Z,{value:"sparksql",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"insert into h0 select 1, 'a1', 20;\n\n-- insert static partition\ninsert into h_p0 partition(dt = '2021-01-02') select 1, 'a1';\n\n-- insert dynamic partition\ninsert into h_p0 select 1, 'a1', dt;\n\n-- insert dynamic partition\ninsert into h_p1 select 1 as id, 'a1', '2021-01-03' as dt, '19' as hh;\n\n-- insert overwrite table\ninsert overwrite table h0 select 1, 'a1', 20;\n\n-- insert overwrite table with static partition\ninsert overwrite h_p0 partition(dt = '2021-01-02') select 1, 'a1';\n\n-- insert overwrite table with dynamic partition\n  insert overwrite table h_p1 select 2 as id, 'a2', '2021-01-03' as dt, '19' as hh;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTICE")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Insert mode : Hudi supports two insert modes when inserting data to a table with primary key(we call it pk-table as followed):",(0,i.kt)("br",null),"\nUsing ",(0,i.kt)("inlineCode",{parentName:"p"},"strict")," mode, insert statement will keep the primary key uniqueness constraint for COW table which do not allow\nduplicate records. If a record already exists during insert, a HoodieDuplicateKeyException will be thrown\nfor COW table. For MOR table, updates are allowed to existing record.",(0,i.kt)("br",null),"\nUsing ",(0,i.kt)("inlineCode",{parentName:"p"},"non-strict")," mode, hudi uses the same code path used by ",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," operation in spark data source for the pk-table. ",(0,i.kt)("br",null),"\nOne can set the insert mode by using the config: ",(0,i.kt)("strong",{parentName:"p"},"hoodie.sql.insert.mode"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bulk Insert : By default, hudi uses the normal insert operation for insert statements. Users can set ",(0,i.kt)("strong",{parentName:"p"},"hoodie.sql.bulk.insert.enable"),"\nto true to enable the bulk insert for insert statement."))))),(0,i.kt)("p",null,"Checkout ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators"},"https://hudi.apache.org/blog/2021/02/13/hudi-key-generators")," for various key generator options, like Timestamp based,\ncomplex, custom, NonPartitioned Key gen, etc."),(0,i.kt)("h3",{id:"insert-overwrite-table"},"Insert Overwrite Table"),(0,i.kt)("p",null,"Generate some new trips, overwrite the table logically at the Hudi metadata level. The Hudi cleaner will eventually\nclean up the previous table snapshot's file groups. This can be faster than deleting the older table and recreating\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"Overwrite")," mode."),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"SparkSQL",value:"sparksql"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nspark.\n  read.format("hudi").\n  load(basePath).\n  select("uuid","partitionpath").\n  show(10, false)\n\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"insert_overwrite_table").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// Should have different keys now, from query before.\nspark.\n  read.format("hudi").\n  load(basePath).\n  select("uuid","partitionpath").\n  show(10, false)\n\n'))),(0,i.kt)(l.Z,{value:"sparksql",mdxType:"TabItem"},(0,i.kt)("p",null,"The insert overwrite non-partitioned table sql statement will convert to the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"insert_overwrite_table"))," operation.\ne.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"insert overwrite table h0 select 1, 'a1', 20;\n")))),(0,i.kt)("h3",{id:"insert-overwrite"},"Insert Overwrite"),(0,i.kt)("p",null,"Generate some new trips, overwrite the all the partitions that are present in the input. This operation can be faster\nthan ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")," for batch ETL jobs, that are recomputing entire target partitions at once (as opposed to incrementally\nupdating the target tables). This is because, we are able to bypass indexing, precombining and other repartitioning\nsteps in the upsert write path completely."),(0,i.kt)(o.Z,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"SparkSQL",value:"sparksql"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'// spark-shell\nspark.\n  read.format("hudi").\n  load(basePath).\n  select("uuid","partitionpath").\n  sort("partitionpath","uuid").\n  show(100, false)\n\nval inserts = convertToStringList(dataGen.generateInserts(10))\nval df = spark.\n  read.json(spark.sparkContext.parallelize(inserts, 2)).\n  filter("partitionpath = \'americas/united_states/san_francisco\'")\ndf.write.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option(OPERATION_OPT_KEY,"insert_overwrite").\n  option(PRECOMBINE_FIELD_OPT_KEY, "ts").\n  option(RECORDKEY_FIELD_OPT_KEY, "uuid").\n  option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath").\n  option(TABLE_NAME, tableName).\n  mode(Append).\n  save(basePath)\n\n// Should have different keys now for San Francisco alone, from query before.\nspark.\n  read.format("hudi").\n  load(basePath).\n  select("uuid","partitionpath").\n  sort("partitionpath","uuid").\n  show(100, false)\n'))),(0,i.kt)(l.Z,{value:"sparksql",mdxType:"TabItem"},(0,i.kt)("p",null,"The insert overwrite partitioned table sql statement will convert to the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"insert_overwrite"))," operation.\ne.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"insert overwrite table h_p1 select 2 as id, 'a2', '2021-01-03' as dt, '19' as hh;\n")))),(0,i.kt)("h3",{id:"deletes"},"Deletes"),(0,i.kt)("p",null,"Hudi supports implementing two types of deletes on data stored in Hudi tables, by enabling the user to specify a different record payload implementation.\nFor more info refer to ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/x/6IqvC"},"Delete support in Hudi"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Soft Deletes")," : Retain the record key and just null out the values for all the other fields.\nThis can be achieved by ensuring the appropriate fields are nullable in the table schema and simply upserting the table after setting these fields to null.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Hard Deletes")," : A stronger form of deletion is to physically remove any trace of the record from the table. This can be achieved in 3 different ways."),(0,i.kt)("p",{parentName:"li"},"  1) Using DataSource, set ",(0,i.kt)("inlineCode",{parentName:"p"},"OPERATION_OPT_KEY")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE_OPERATION_OPT_VAL"),". This will remove all the records in the DataSet being submitted."),(0,i.kt)("p",{parentName:"li"},"  2) Using DataSource, set ",(0,i.kt)("inlineCode",{parentName:"p"},"PAYLOAD_CLASS_OPT_KEY")," to ",(0,i.kt)("inlineCode",{parentName:"p"},'"org.apache.hudi.EmptyHoodieRecordPayload"'),". This will remove all the records in the DataSet being submitted."),(0,i.kt)("p",{parentName:"li"},"  3) Using DataSource or DeltaStreamer, add a column named ",(0,i.kt)("inlineCode",{parentName:"p"},"_hoodie_is_deleted")," to DataSet. The value of this column must be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for all the records to be deleted and either ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," or left null for any records which are to be upserted."))),(0,i.kt)("p",null,"Example using hard delete method 2, remove all the records from the table that exist in the DataSet ",(0,i.kt)("inlineCode",{parentName:"p"},"deleteDF"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},' deleteDF // dataframe containing just records to be deleted\n   .write().format("org.apache.hudi")\n   .option(...) // Add HUDI options like record-key, partition-path and others as needed for your setup\n   // specify record_key, partition_key, precombine_fieldkey & usual params\n   .option(DataSourceWriteOptions.PAYLOAD_CLASS_OPT_KEY, "org.apache.hudi.EmptyHoodieRecordPayload")\n \n')),(0,i.kt)("h3",{id:"concurrency-control"},"Concurrency Control"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"hudi-spark")," module offers the DataSource API to write (and read) a Spark DataFrame into a Hudi table."),(0,i.kt)("p",null,"Following is an example of how to use optimistic_concurrency_control via spark datasource. Read more in depth about concurrency control in the ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/concurrency_control"},"concurrency control concepts")," section  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'inputDF.write.format("hudi")\n       .options(getQuickstartWriteConfigs)\n       .option(PRECOMBINE_FIELD_OPT_KEY, "ts")\n       .option("hoodie.cleaner.policy.failed.writes", "LAZY")\n       .option("hoodie.write.concurrency.mode", "optimistic_concurrency_control")\n       .option("hoodie.write.lock.zookeeper.url", "zookeeper")\n       .option("hoodie.write.lock.zookeeper.port", "2181")\n       .option("hoodie.write.lock.zookeeper.lock_key", "test_table")\n       .option("hoodie.write.lock.zookeeper.base_path", "/test")\n       .option(RECORDKEY_FIELD_OPT_KEY, "uuid")\n       .option(PARTITIONPATH_FIELD_OPT_KEY, "partitionpath")\n       .option(TABLE_NAME, tableName)\n       .mode(Overwrite)\n       .save(basePath)\n')),(0,i.kt)("h2",{id:"flink-sql-writer"},"Flink SQL Writer"),(0,i.kt)("p",null,"The hudi-flink module defines the Flink SQL connector for both hudi source and sink.\nThere are a number of options available for the sink table:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"Base path for the target hoodie table. The path would be created if it does not exist, otherwise a hudi table expects to be initialized successfully")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"table.type"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"COPY_ON_WRITE"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of table to write. COPY_ON_WRITE (or) MERGE_ON_READ")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"write.operation"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"upsert"),(0,i.kt)("td",{parentName:"tr",align:null},"The write operation, that this write should do (insert or upsert is supported)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"write.precombine.field"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"ts"),(0,i.kt)("td",{parentName:"tr",align:null},"Field used in preCombining before actual write. When two records have the same key value, we will pick the one with the largest value for the precombine field, determined by Object.compareTo(..)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"write.payload.class"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"OverwriteWithLatestAvroPayload.class"),(0,i.kt)("td",{parentName:"tr",align:null},"Payload class used. Override this, if you like to roll your own merge logic, when upserting/inserting. This will render any value set for the option in-effective")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"write.insert.drop.duplicates"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Flag to indicate whether to drop duplicates upon insert. By default insert will accept duplicates, to gain extra performance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"write.ignore.failed"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Flag to indicate whether to ignore any non exception error (e.g. writestatus error). within a checkpoint batch. By default true (in favor of streaming progressing over data integrity)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.write.recordkey.field"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"uuid"),(0,i.kt)("td",{parentName:"tr",align:null},"Record key field. Value to be used as the ",(0,i.kt)("inlineCode",{parentName:"td"},"recordKey")," component of ",(0,i.kt)("inlineCode",{parentName:"td"},"HoodieKey"),". Actual value will be obtained by invoking .toString() on the field value. Nested fields can be specified using the dot notation eg: ",(0,i.kt)("inlineCode",{parentName:"td"},"a.b.c"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hoodie.datasource.write.keygenerator.class"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"SimpleAvroKeyGenerator.class"),(0,i.kt)("td",{parentName:"tr",align:null},"Key generator class, that implements will extract the key out of incoming record")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"write.tasks"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"Parallelism of tasks that do actual write, default is 4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"write.batch.size.MB"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"128"),(0,i.kt)("td",{parentName:"tr",align:null},"Batch buffer size in MB to flush data into the underneath filesystem")))),(0,i.kt)("p",null,"If the table type is MERGE_ON_READ, you can also specify the asynchronous compaction strategy through options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"compaction.async.enabled"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"Async Compaction, enabled by default for MOR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"compaction.trigger.strategy"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"num_commits"),(0,i.kt)("td",{parentName:"tr",align:null},"Strategy to trigger compaction, options are 'num_commits': trigger compaction when reach N delta commits; 'time_elapsed': trigger compaction when time elapsed > N seconds since last compaction; 'num_and_time': trigger compaction when both NUM_COMMITS and TIME_ELAPSED are satisfied; 'num_or_time': trigger compaction when NUM_COMMITS or TIME_ELAPSED is satisfied. Default is 'num_commits'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"compaction.delta_commits"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"Max delta commits needed to trigger compaction, default 5 commits")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"compaction.delta_seconds"),(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"3600"),(0,i.kt)("td",{parentName:"tr",align:null},"Max delta seconds time needed to trigger compaction, default 1 hour")))),(0,i.kt)("p",null,"You can write the data using the SQL ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," statements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO hudi_table select ... from ...; \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": INSERT OVERWRITE is not supported yet but already on the roadmap."))}h.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);