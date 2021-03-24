using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::Role`.</summary>
    [JsiiInterface(nativeType: typeof(IRosRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRoleProps")]
    public interface IRosRoleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        /// </remarks>
        [JsiiProperty(name: "assumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AssumeRolePolicyDocument
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleName: Specifies the role name, containing up to 64 characters.
        /// </remarks>
        [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}")]
        string RoleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Remark information, up to 1024 characters or Chinese characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxSessionDuration: The maximum session duration of the RAM role.
        /// Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        /// The default value is used if the parameter is not specified.
        /// </remarks>
        [JsiiProperty(name: "maxSessionDuration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? MaxSessionDuration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: policies: Describes what actions are allowed on what resources.
        /// </remarks>
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policies
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::RAM::Role`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRoleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosRoleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
            /// </remarks>
            [JsiiProperty(name: "assumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AssumeRolePolicyDocument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: roleName: Specifies the role name, containing up to 64 characters.
            /// </remarks>
            [JsiiProperty(name: "roleName", typeJson: "{\"primitive\":\"string\"}")]
            public string RoleName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Remark information, up to 1024 characters or Chinese characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxSessionDuration: The maximum session duration of the RAM role.
            /// Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
            /// The default value is used if the parameter is not specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxSessionDuration", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? MaxSessionDuration
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: policies: Describes what actions are allowed on what resources.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Policies
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
