using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dfs
{
    /// <summary>Properties for defining a `RosAccessRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccessRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.RosAccessRuleProps")]
    public interface IRosAccessRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessGroupId: The resource ID of Access Group.
        /// </remarks>
        [JsiiProperty(name: "accessGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkSegment: The NetworkSegment of the Access Rule.
        /// </remarks>
        [JsiiProperty(name: "networkSegment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkSegment
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: rwAccessType: The read\/write permission of the authorized object on the file system.
        /// Values:
        /// RDWR (default) : read and write.
        /// RDONLY: read-only
        /// </remarks>
        [JsiiProperty(name: "rwAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RwAccessType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The Description of the Access Rule.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: The Priority of the Access Rule. Valid values: 1 to 100.
        /// NOTE: When multiple rules are matched by the same authorized object,
        /// the high-priority rule takes effect. 1 is the highest priority.
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAccessRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dfs-accessrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.RosAccessRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dfs.IRosAccessRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessGroupId: The resource ID of Access Group.
            /// </remarks>
            [JsiiProperty(name: "accessGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkSegment: The NetworkSegment of the Access Rule.
            /// </remarks>
            [JsiiProperty(name: "networkSegment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkSegment
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: rwAccessType: The read\/write permission of the authorized object on the file system.
            /// Values:
            /// RDWR (default) : read and write.
            /// RDONLY: read-only
            /// </remarks>
            [JsiiProperty(name: "rwAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RwAccessType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The Description of the Access Rule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: The Priority of the Access Rule. Valid values: 1 to 100.
            /// NOTE: When multiple rules are matched by the same authorized object,
            /// the high-priority rule takes effect. 1 is the highest priority.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
