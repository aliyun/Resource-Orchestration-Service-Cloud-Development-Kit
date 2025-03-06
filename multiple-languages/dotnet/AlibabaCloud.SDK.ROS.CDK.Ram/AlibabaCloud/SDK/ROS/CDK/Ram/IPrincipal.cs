using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Represents a logical RAM principal.</summary>
    /// <remarks>
    /// An IPrincipal describes a logical entity that can perform ACS API calls
    /// against sets of resources, optionally under certain conditions.
    ///
    /// Examples of principals are RAM objects that you create, such
    /// as Users, Roles or Groups.
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPrincipal), fullyQualifiedName: "@alicloud/ros-cdk-ram.IPrincipal")]
    public interface IPrincipal : AlibabaCloud.SDK.ROS.CDK.Ram.IGrantable
    {
        /// <summary>The principal to grant permissions to.</summary>
        [JsiiProperty(name: "principalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrincipalName
        {
            get;
        }

        /// <summary>The principal type, such as 'Group', 'Role', 'User'.</summary>
        [JsiiProperty(name: "principalType", typeJson: "{\"primitive\":\"string\"}")]
        string PrincipalType
        {
            get;
        }
        /// <summary>Add to the policy of this principal.</summary>
        [JsiiMethod(name: "addToPolicy", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"name\":\"policyDocument\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.RosManagedPolicy.PolicyDocumentProperty\"}}]")]
        AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy AddToPolicy(AlibabaCloud.SDK.ROS.CDK.Ram.RosManagedPolicy.IPolicyDocumentProperty policyDocument);

        /// <summary>Represents a logical RAM principal.</summary>
        /// <remarks>
        /// An IPrincipal describes a logical entity that can perform ACS API calls
        /// against sets of resources, optionally under certain conditions.
        ///
        /// Examples of principals are RAM objects that you create, such
        /// as Users, Roles or Groups.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPrincipal), fullyQualifiedName: "@alicloud/ros-cdk-ram.IPrincipal")]
        new internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The principal to grant permissions to.</summary>
            [JsiiProperty(name: "principalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrincipalName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>The principal type, such as 'Group', 'Role', 'User'.</summary>
            [JsiiProperty(name: "principalType", typeJson: "{\"primitive\":\"string\"}")]
            public string PrincipalType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The principal to grant permissions to.</summary>
            [JsiiProperty(name: "grantPrincipal", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ram.IPrincipal\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal GrantPrincipal
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ram.IPrincipal>()!;
            }

            /// <summary>Add to the policy of this principal.</summary>
            [JsiiMethod(name: "addToPolicy", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.ManagedPolicy\"}}", parametersJson: "[{\"name\":\"policyDocument\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ram.RosManagedPolicy.PolicyDocumentProperty\"}}]")]
            public AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy AddToPolicy(AlibabaCloud.SDK.ROS.CDK.Ram.RosManagedPolicy.IPolicyDocumentProperty policyDocument)
            {
                return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ram.ManagedPolicy>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Ram.RosManagedPolicy.IPolicyDocumentProperty)}, new object[]{policyDocument})!;
            }
        }
    }
}
