using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `ALIYUN::SLS::LogtailConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IRosLogtailConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosLogtailConfigProps")]
    public interface IRosLogtailConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: logstoreName: Logstore name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogstoreName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logtailConfigName: Logtail config name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logtailConfigName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogtailConfigName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: Project name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cloneFrom: Clone logtail config data from existing logtail config.
        /// Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        /// </remarks>
        [JsiiProperty(name: "cloneFrom", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogtailConfig.CloneFromProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CloneFrom
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rawConfigData: The format is the same as the response of SLS API GetConfig.
        /// Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        /// configName, outputType, outputDetail in data will be ignored.For example:
        /// {
        /// "configName": "test-logtail-config",
        /// "createTime": 1574843554,
        /// "inputDetail": {
        /// "acceptNoEnoughKeys": false,
        /// "adjustTimezone": false,
        /// "advanced": {
        ///   "force_multiconfig": false
        /// },
        /// "autoExtend": true,
        /// "delayAlarmBytes": 0,
        /// "delaySkipBytes": 0,
        /// "discardNonUtf8": false,
        /// "discardUnmatch": false,
        /// "dockerExcludeEnv": {},
        /// "dockerExcludeLabel": {},
        /// "dockerFile": false,
        /// "dockerIncludeEnv": {},
        /// "dockerIncludeLabel": {},
        /// "enableRawLog": false,
        /// "enableTag": false,
        /// "fileEncoding": "utf8",
        /// "filePattern": "test.log*",
        /// "filterKey": [],
        /// "filterRegex": [],
        /// "key": [
        ///   "time",
        ///   "logger",
        ///   "level",
        ///   "request_id",
        ///   "user_id",
        ///   "region_id",
        ///   "content"
        /// ],
        /// "localStorage": true,
        /// "logPath": "/var/log/test",
        /// "logTimezone": "",
        /// "logType": "delimiter_log",
        /// "maxDepth": 100,
        /// "maxSendRate": -1,
        /// "mergeType": "topic",
        /// "preserve": true,
        /// "preserveDepth": 1,
        /// "priority": 0,
        /// "quote": "\u0001",
        /// "sendRateExpire": 0,
        /// "sensitive_keys": [],
        /// "separator": ",,,",
        /// "shardHashKey": [],
        /// "tailExisted": false,
        /// "timeFormat": "",
        /// "timeKey": "",
        /// "topicFormat": "none"
        /// },
        /// "inputType": "file",
        /// "lastModifyTime": 1574843554,
        /// "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
        /// "outputDetail": {
        /// "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
        /// "logstoreName": "test-logstore",
        /// "region": "cn-hangzhou"
        /// },
        /// "outputType": "LogService"
        /// }
        /// </remarks>
        [JsiiProperty(name: "rawConfigData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RawConfigData
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLS::LogtailConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosLogtailConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosLogtailConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRosLogtailConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: logstoreName: Logstore name:
            /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogstoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logtailConfigName: Logtail config name:
            /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "logtailConfigName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogtailConfigName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: Project name:
            /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cloneFrom: Clone logtail config data from existing logtail config.
            /// Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloneFrom", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogtailConfig.CloneFromProperty\"}]}}", isOptional: true)]
            public object? CloneFrom
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rawConfigData: The format is the same as the response of SLS API GetConfig.
            /// Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
            /// configName, outputType, outputDetail in data will be ignored.For example:
            /// {
            /// "configName": "test-logtail-config",
            /// "createTime": 1574843554,
            /// "inputDetail": {
            /// "acceptNoEnoughKeys": false,
            /// "adjustTimezone": false,
            /// "advanced": {
            ///   "force_multiconfig": false
            /// },
            /// "autoExtend": true,
            /// "delayAlarmBytes": 0,
            /// "delaySkipBytes": 0,
            /// "discardNonUtf8": false,
            /// "discardUnmatch": false,
            /// "dockerExcludeEnv": {},
            /// "dockerExcludeLabel": {},
            /// "dockerFile": false,
            /// "dockerIncludeEnv": {},
            /// "dockerIncludeLabel": {},
            /// "enableRawLog": false,
            /// "enableTag": false,
            /// "fileEncoding": "utf8",
            /// "filePattern": "test.log*",
            /// "filterKey": [],
            /// "filterRegex": [],
            /// "key": [
            ///   "time",
            ///   "logger",
            ///   "level",
            ///   "request_id",
            ///   "user_id",
            ///   "region_id",
            ///   "content"
            /// ],
            /// "localStorage": true,
            /// "logPath": "/var/log/test",
            /// "logTimezone": "",
            /// "logType": "delimiter_log",
            /// "maxDepth": 100,
            /// "maxSendRate": -1,
            /// "mergeType": "topic",
            /// "preserve": true,
            /// "preserveDepth": 1,
            /// "priority": 0,
            /// "quote": "\u0001",
            /// "sendRateExpire": 0,
            /// "sensitive_keys": [],
            /// "separator": ",,,",
            /// "shardHashKey": [],
            /// "tailExisted": false,
            /// "timeFormat": "",
            /// "timeKey": "",
            /// "topicFormat": "none"
            /// },
            /// "inputType": "file",
            /// "lastModifyTime": 1574843554,
            /// "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
            /// "outputDetail": {
            /// "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
            /// "logstoreName": "test-logstore",
            /// "region": "cn-hangzhou"
            /// },
            /// "outputType": "LogService"
            /// }
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rawConfigData", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? RawConfigData
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
