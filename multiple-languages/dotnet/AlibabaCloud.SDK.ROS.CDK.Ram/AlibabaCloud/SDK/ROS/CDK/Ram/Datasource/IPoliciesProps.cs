using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::RAM::Policies`.</summary>
    [JsiiInterface(nativeType: typeof(IPoliciesProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.PoliciesProps")]
    public interface IPoliciesProps
    {
        /// <summary>Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policyName: Filter the results by a specific policy name.</summary>
        /// <remarks>
        /// Supports using * and ?  to fuzzy match.
        /// </remarks>
        [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policyType: Filter the results by a specific policy type.</summary>
        [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RoleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userName: The specific user to which policies attached.</summary>
        /// <remarks>
        /// Only one of UserName, GroupName, and RoleName can be specified at most.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::RAM::Policies`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPoliciesProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.PoliciesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IPoliciesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupName: The specific group to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policyName: Filter the results by a specific policy name.</summary>
            /// <remarks>
            /// Supports using * and ?  to fuzzy match.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PolicyName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policyType: Filter the results by a specific policy type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "policyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PolicyType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property roleName: The specific role to which policies attached.Only one of UserName, GroupName, and RoleName can be specified at most.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RoleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userName: The specific user to which policies attached.</summary>
            /// <remarks>
            /// Only one of UserName, GroupName, and RoleName can be specified at most.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
