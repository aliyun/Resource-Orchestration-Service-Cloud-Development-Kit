using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `LogtailConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-logtailconfig
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.LogtailConfigProps")]
    public class LogtailConfigProps : AlibabaCloud.SDK.ROS.CDK.Sls.ILogtailConfigProps
    {
        private object _logstoreName;

        /// <summary>Property logstoreName: Logstore name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LogstoreName
        {
            get => _logstoreName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _logstoreName = value;
            }
        }

        private object _logtailConfigName;

        /// <summary>Property logtailConfigName: Logtail config name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logtailConfigName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LogtailConfigName
        {
            get => _logtailConfigName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _logtailConfigName = value;
            }
        }

        private object _projectName;

        /// <summary>Property projectName: Project name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ProjectName
        {
            get => _projectName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _projectName = value;
            }
        }

        private object? _cloneFrom;

        /// <summary>Property cloneFrom: Clone logtail config data from existing logtail config.</summary>
        /// <remarks>
        /// Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cloneFrom", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogtailConfig.CloneFromProperty\"}]}}", isOptional: true)]
        public object? CloneFrom
        {
            get => _cloneFrom;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Sls.RosLogtailConfig.ICloneFromProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosLogtailConfig.ICloneFromProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _cloneFrom = value;
            }
        }

        private object? _rawConfigData;

        /// <summary>Property rawConfigData: The format is the same as the response of SLS API GetConfig.</summary>
        /// <remarks>
        /// Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        /// configName, outputType, outputDetail in data will be ignored.For example:
        /// {
        /// "configName": "test-logtail-config",
        /// "createTime": 1574843554,
        /// "inputDetail": {
        /// "acceptNoEnoughKeys": false,
        /// "adjustTimezone": false,
        /// "advanced": {
        /// "force_multiconfig": false
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
        /// "time",
        /// "logger",
        /// "level",
        /// "request_id",
        /// "user_id",
        /// "region_id",
        /// "content"
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
            get => _rawConfigData;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _rawConfigData = value;
            }
        }
    }
}
