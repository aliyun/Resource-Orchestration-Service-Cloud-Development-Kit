using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram.Datasource
{
    /// <summary>Properties for defining a `Groups`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.GroupsProps")]
    public interface IGroupsProps
    {
        /// <summary>Property groupName: Filter the results by a specific group name.</summary>
        /// <remarks>
        /// Supports using * and ? to fuzzy match.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userName: The specific user which groups contains.</summary>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Groups`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-groups
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.GroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupName: Filter the results by a specific group name.</summary>
            /// <remarks>
            /// Supports using * and ? to fuzzy match.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userName: The specific user which groups contains.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
