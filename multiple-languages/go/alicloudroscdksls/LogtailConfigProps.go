package alicloudroscdksls


// Properties for defining a `LogtailConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig
type LogtailConfigProps struct {
	// Property logstoreName: Logstore name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	LogstoreName interface{} `field:"required" json:"logstoreName" yaml:"logstoreName"`
	// Property logtailConfigName: Logtail config name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	LogtailConfigName interface{} `field:"required" json:"logtailConfigName" yaml:"logtailConfigName"`
	// Property projectName: Project name: 1.
	//
	// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
	// 2. Must start and end with lowercase letters and numbers.
	// 3. The name length is 3-63 characters.
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property cloneFrom: Clone logtail config data from existing logtail config.
	//
	// Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
	CloneFrom interface{} `field:"optional" json:"cloneFrom" yaml:"cloneFrom"`
	// Property rawConfigData: The format is the same as the response of SLS API GetConfig.
	//
	// Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
	// configName, outputType, outputDetail in data will be ignored.For example:
	// {
	//      "configName": "test-logtail-config",
	//      "createTime": 1574843554,
	//      "inputDetail": {
	//          "acceptNoEnoughKeys": false,
	//          "adjustTimezone": false,
	//          "advanced": {
	//              "force_multiconfig": false
	//          },
	//          "autoExtend": true,
	//          "delayAlarmBytes": 0,
	//          "delaySkipBytes": 0,
	//          "discardNonUtf8": false,
	//          "discardUnmatch": false,
	//          "dockerExcludeEnv": {},
	//          "dockerExcludeLabel": {},
	//          "dockerFile": false,
	//          "dockerIncludeEnv": {},
	//          "dockerIncludeLabel": {},
	//          "enableRawLog": false,
	//          "enableTag": false,
	//          "fileEncoding": "utf8",
	//          "filePattern": "test.log*",
	//          "filterKey": [],
	//          "filterRegex": [],
	//          "key": [
	//              "time",
	//              "logger",
	//              "level",
	//              "request_id",
	//              "user_id",
	//              "region_id",
	//              "content"
	//          ],
	//          "localStorage": true,
	//          "logPath": "\/var\/log\/test",
	//          "logTimezone": "",
	//          "logType": "delimiter_log",
	//          "maxDepth": 100,
	//          "maxSendRate": -1,
	//          "mergeType": "topic",
	//          "preserve": true,
	//          "preserveDepth": 1,
	//          "priority": 0,
	//          "quote": "\u0001",
	//          "sendRateExpire": 0,
	//          "sensitive_keys": [],
	//          "separator": ",,,",
	//          "shardHashKey": [],
	//          "tailExisted": false,
	//          "timeFormat": "",
	//          "timeKey": "",
	//          "topicFormat": "none"
	//      },
	//      "inputType": "file",
	//      "lastModifyTime": 1574843554,
	//      "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
	//      "outputDetail": {
	//          "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
	//          "logstoreName": "test-logstore",
	//          "region": "cn-hangzhou"
	//      },
	//      "outputType": "LogService"
	// }.
	RawConfigData interface{} `field:"optional" json:"rawConfigData" yaml:"rawConfigData"`
}

