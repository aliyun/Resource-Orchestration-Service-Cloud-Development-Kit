using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `RosZone`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosZoneProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosZoneProps")]
    public interface IRosZoneProps
    {
        /// <remarks>
        /// <strong>Property</strong>: zoneName: Zone name
        /// </remarks>
        [JsiiProperty(name: "zoneName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ignoredStackTagKeys: Stack tag keys to ignore
        /// </remarks>
        [JsiiProperty(name: "ignoredStackTagKeys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IgnoredStackTagKeys
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyPattern: ZONE: completely hijack the entire zone.
        /// RECORD: Incomplete hijacking, recursive resolution agent.
        /// Default to ZONE.
        /// </remarks>
        [JsiiProperty(name: "proxyPattern", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyPattern
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZone.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZone.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneTag: Zone label. It will be ignored when ZoneType is AUTH_ZONE.
        /// </remarks>
        [JsiiProperty(name: "zoneTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneTag
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneType: Zone type. For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
        /// </remarks>
        [JsiiProperty(name: "zoneType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosZone`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosZoneProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosZoneProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IRosZoneProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneName: Zone name
            /// </remarks>
            [JsiiProperty(name: "zoneName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ignoredStackTagKeys: Stack tag keys to ignore
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ignoredStackTagKeys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? IgnoredStackTagKeys
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyPattern: ZONE: completely hijack the entire zone.
            /// RECORD: Incomplete hijacking, recursive resolution agent.
            /// Default to ZONE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyPattern", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyPattern
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-pvtz.RosZone.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZone.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pvtz.RosZone.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneTag: Zone label. It will be ignored when ZoneType is AUTH_ZONE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneTag
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneType: Zone type. For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
