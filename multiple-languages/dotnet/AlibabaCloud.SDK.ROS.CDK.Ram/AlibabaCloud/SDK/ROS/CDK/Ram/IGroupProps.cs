using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::Group`.</summary>
    [JsiiInterface(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.GroupProps")]
    public interface IGroupProps
    {
        /// <summary>Property groupName: Specifies the group name, containing up to 64 characters.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <summary>Property comments: Remark information, up to 128 characters or Chinese characters.</summary>
        [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Comments
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policies: Describes what actions are allowed on what resources.</summary>
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosGroup.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policies
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::Group`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.GroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupName: Specifies the group name, containing up to 64 characters.</summary>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property comments: Remark information, up to 128 characters or Chinese characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comments
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policies: Describes what actions are allowed on what resources.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosGroup.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Policies
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
