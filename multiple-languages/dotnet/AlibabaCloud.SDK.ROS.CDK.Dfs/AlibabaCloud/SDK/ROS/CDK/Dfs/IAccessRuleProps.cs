using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dfs
{
    /// <summary>Properties for defining a `ALIYUN::DFS::AccessRule`.</summary>
    [JsiiInterface(nativeType: typeof(IAccessRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.AccessRuleProps")]
    public interface IAccessRuleProps
    {
        /// <summary>Property accessGroupId: The resource ID of Access Group.</summary>
        [JsiiProperty(name: "accessGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessGroupId
        {
            get;
        }

        /// <summary>Property networkSegment: The NetworkSegment of the Access Rule.</summary>
        [JsiiProperty(name: "networkSegment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkSegment
        {
            get;
        }

        /// <summary>Property rwAccessType: The read/write permission of the authorized object on the file system.</summary>
        /// <remarks>
        /// Values:
        /// RDWR (default) : read and write.
        /// RDONLY: read-only
        /// </remarks>
        [JsiiProperty(name: "rwAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RwAccessType
        {
            get;
        }

        /// <summary>Property description: The Description of the Access Rule.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property priority: The Priority of the Access Rule.</summary>
        /// <remarks>
        /// Valid values: 1 to 100.
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

        /// <summary>Properties for defining a `ALIYUN::DFS::AccessRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccessRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dfs.AccessRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dfs.IAccessRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessGroupId: The resource ID of Access Group.</summary>
            [JsiiProperty(name: "accessGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property networkSegment: The NetworkSegment of the Access Rule.</summary>
            [JsiiProperty(name: "networkSegment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkSegment
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property rwAccessType: The read/write permission of the authorized object on the file system.</summary>
            /// <remarks>
            /// Values:
            /// RDWR (default) : read and write.
            /// RDONLY: read-only
            /// </remarks>
            [JsiiProperty(name: "rwAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RwAccessType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The Description of the Access Rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property priority: The Priority of the Access Rule.</summary>
            /// <remarks>
            /// Valid values: 1 to 100.
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
