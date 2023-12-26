using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Brainindustrial
{
    /// <summary>Properties for defining a `PidOrganization`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidorganization
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPidOrganizationProps), fullyQualifiedName: "@alicloud/ros-cdk-brainindustrial.PidOrganizationProps")]
    public interface IPidOrganizationProps
    {
        /// <summary>Property pidOrganizationName: PidOrganizationName.</summary>
        [JsiiProperty(name: "pidOrganizationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PidOrganizationName
        {
            get;
        }

        /// <summary>Property parentPidOrganizationId: ParentPidOrganizationId.</summary>
        [JsiiProperty(name: "parentPidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParentPidOrganizationId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PidOrganization`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidorganization
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPidOrganizationProps), fullyQualifiedName: "@alicloud/ros-cdk-brainindustrial.PidOrganizationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Brainindustrial.IPidOrganizationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property pidOrganizationName: PidOrganizationName.</summary>
            [JsiiProperty(name: "pidOrganizationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PidOrganizationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property parentPidOrganizationId: ParentPidOrganizationId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "parentPidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParentPidOrganizationId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
