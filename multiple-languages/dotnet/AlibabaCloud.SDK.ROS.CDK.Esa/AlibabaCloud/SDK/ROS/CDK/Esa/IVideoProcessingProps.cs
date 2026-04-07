using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `VideoProcessing`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-videoprocessing
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVideoProcessingProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.VideoProcessingProps")]
    public interface IVideoProcessingProps
    {
        /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites API.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property flvSeekEnd: Custom FLV end parameters.</summary>
        [JsiiProperty(name: "flvSeekEnd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlvSeekEnd
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property flvSeekStart: Custom FLV start parameters.</summary>
        [JsiiProperty(name: "flvSeekStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlvSeekStart
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property flvVideoSeekMode: FLV drag mode.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>by_byte</c>: Drag by byte.</description>
        /// <description><c>by_time</c>: Drag by time.</description>
        /// </list>
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

        /// <summary>Property mp4SeekEnd: Custom mp4 end parameters.</summary>
        [JsiiProperty(name: "mp4SeekEnd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mp4SeekEnd
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mp4SeekStart: Custom mp4 start parameters.</summary>
        [JsiiProperty(name: "mp4SeekStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mp4SeekStart
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rule: Rule content, using conditional expressions to match user requests.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
        ///
        /// <list type="bullet">
        /// <description>Match all incoming requests: value set to true</description>
        /// <description>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</description>
        /// </list>
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

        /// <summary>Property ruleEnable: Rule switch.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set. Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: open.</description>
        /// <description><c>off</c>: close.</description>
        /// </list>
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

        /// <summary>Property ruleName: Rule name.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set.
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

        /// <summary>Property sequence: The rule execution order prioritizes lower numerical values.</summary>
        /// <remarks>
        /// It is only applicable when setting or modifying the order of individual rule configurations.
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

        /// <summary>Property siteVersion: The version number of the site configuration.</summary>
        /// <remarks>
        /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
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

        /// <summary>Property videoSeekEnable: Drag and drop the play function switch.</summary>
        /// <remarks>
        /// Value range:
        ///
        /// <list type="bullet">
        /// <description><c>on</c>: open.</description>
        /// <description><c>off</c>: close.</description>
        /// </list>
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

        /// <summary>Properties for defining a `VideoProcessing`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-videoprocessing
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVideoProcessingProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.VideoProcessingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IVideoProcessingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites API.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property flvSeekEnd: Custom FLV end parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flvSeekEnd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlvSeekEnd
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property flvSeekStart: Custom FLV start parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flvSeekStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlvSeekStart
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property flvVideoSeekMode: FLV drag mode.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>by_byte</c>: Drag by byte.</description>
            /// <description><c>by_time</c>: Drag by time.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flvVideoSeekMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlvVideoSeekMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mp4SeekEnd: Custom mp4 end parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mp4SeekEnd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Mp4SeekEnd
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mp4SeekStart: Custom mp4 start parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mp4SeekStart", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Mp4SeekStart
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rule: Rule content, using conditional expressions to match user requests.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
            ///
            /// <list type="bullet">
            /// <description>Match all incoming requests: value set to true</description>
            /// <description>Match specified request: Set the value to a custom expression, for example: (http.host eq "video.example.com").</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Rule
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleEnable: Rule switch.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set. Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: open.</description>
            /// <description><c>off</c>: close.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleName: Rule name.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sequence: The rule execution order prioritizes lower numerical values.</summary>
            /// <remarks>
            /// It is only applicable when setting or modifying the order of individual rule configurations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sequence", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sequence
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property siteVersion: The version number of the site configuration.</summary>
            /// <remarks>
            /// For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SiteVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property videoSeekEnable: Drag and drop the play function switch.</summary>
            /// <remarks>
            /// Value range:
            ///
            /// <list type="bullet">
            /// <description><c>on</c>: open.</description>
            /// <description><c>off</c>: close.</description>
            /// </list>
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
