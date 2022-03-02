using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>A ROS template type:  `ALIYUN::SLS::LogtailConfig`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosLogtailConfig), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosLogtailConfig", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogtailConfigProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosLogtailConfig : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLS::LogtailConfig`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosLogtailConfig(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Sls.IRosLogtailConfigProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosLogtailConfig(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosLogtailConfig(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Sls.RosLogtailConfig))!;

        /// <remarks>
        /// <strong>Attribute</strong>: AppliedMachineGroups: Applied machine groups.
        /// </remarks>
        [JsiiProperty(name: "attrAppliedMachineGroups", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrAppliedMachineGroups
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Endpoint: Endpoint address.
        /// </remarks>
        [JsiiProperty(name: "attrEndpoint", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrEndpoint
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LogtailConfigName: Logtail config name.
        /// </remarks>
        [JsiiProperty(name: "attrLogtailConfigName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrLogtailConfigName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: logstoreName: Logstore name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object LogstoreName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: logtailConfigName: Logtail config name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "logtailConfigName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object LogtailConfigName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: Project name:
        /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ProjectName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: cloneFrom: Clone logtail config data from existing logtail config.
        /// Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cloneFrom", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosLogtailConfig.CloneFromProperty\"}]}}", isOptional: true)]
        public virtual object? CloneFrom
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
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
        public virtual object? RawConfigData
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ICloneFromProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosLogtailConfig.CloneFromProperty")]
        public interface ICloneFromProperty
        {
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

            [JsiiTypeProxy(nativeType: typeof(ICloneFromProperty), fullyQualifiedName: "@alicloud/ros-cdk-sls.RosLogtailConfig.CloneFromProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.RosLogtailConfig.ICloneFromProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
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
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosLogtailConfig.CloneFromProperty")]
        public class CloneFromProperty : AlibabaCloud.SDK.ROS.CDK.Sls.RosLogtailConfig.ICloneFromProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: logtailConfigName: Logtail config name:
            /// 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
            /// 2. Must start and end with lowercase letters and numbers.
            /// 3. The name length is 3-63 characters.
            /// </remarks>
            [JsiiProperty(name: "logtailConfigName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogtailConfigName
            {
                get;
                set;
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
                get;
                set;
            }
        }
    }
}
