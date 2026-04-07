using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosVideoProcessing`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-videoprocessing
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVideoProcessingProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosVideoProcessingProps")]
    public interface IRosVideoProcessingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: siteId: The site ID, which can be obtained by calling the ListSites API.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: flvSeekEnd: Custom FLV end parameters.
        /// </remarks>
        [JsiiProperty(name: "flvSeekEnd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlvSeekEnd
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: flvSeekStart: Custom FLV start parameters.
        /// </remarks>
        [JsiiProperty(name: "flvSeekStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlvSeekStart
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: flvVideoSeekMode: FLV drag mode. Value range:
        /// - `by_byte`: Drag by byte.
        /// - `by_time`: Drag by time.
        /// </remarks>
        [JsiiProperty(name: "flvVideoSeekMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlvVideoSeekMode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mp4SeekEnd: Custom mp4 end parameters.
        /// </remarks>
        [JsiiProperty(name: "mp4SeekEnd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mp4SeekEnd
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mp4SeekStart: Custom mp4 start parameters.
        /// </remarks>
        [JsiiProperty(name: "mp4SeekStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mp4SeekStart
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        /// - Match all incoming requests: value set to true
        /// - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
        /// </remarks>
        [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Rule
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        /// - `on`: open.
        /// - `off`: close.
        /// </remarks>
        [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleEnable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sequence: The rule execution order prioritizes lower numerical values. It is only applicable when setting or modifying the order of individual rule configurations.
        /// </remarks>
        [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Sequence
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
        /// </remarks>
        [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SiteVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: videoSeekEnable: Drag and drop the play function switch. Value range:
        /// - `on`: open.
        /// - `off`: close.
        /// </remarks>
        [JsiiProperty(name: "videoSeekEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VideoSeekEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVideoProcessing`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-videoprocessing
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVideoProcessingProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosVideoProcessingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosVideoProcessingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: The site ID, which can be obtained by calling the ListSites API.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: flvSeekEnd: Custom FLV end parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flvSeekEnd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlvSeekEnd
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: flvSeekStart: Custom FLV start parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flvSeekStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlvSeekStart
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: flvVideoSeekMode: FLV drag mode. Value range:
            /// - `by_byte`: Drag by byte.
            /// - `by_time`: Drag by time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flvVideoSeekMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlvVideoSeekMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mp4SeekEnd: Custom mp4 end parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mp4SeekEnd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Mp4SeekEnd
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mp4SeekStart: Custom mp4 start parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mp4SeekStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Mp4SeekStart
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
            /// - Match all incoming requests: value set to true
            /// - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Rule
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
            /// - `on`: open.
            /// - `off`: close.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sequence: The rule execution order prioritizes lower numerical values. It is only applicable when setting or modifying the order of individual rule configurations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sequence
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SiteVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: videoSeekEnable: Drag and drop the play function switch. Value range:
            /// - `on`: open.
            /// - `off`: close.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "videoSeekEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VideoSeekEnable
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
