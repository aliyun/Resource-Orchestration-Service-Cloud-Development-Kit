using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Brainindustrial
{
    /// <summary>Properties for defining a `RosPidOrganization`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidorganization
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPidOrganizationProps), fullyQualifiedName: "@alicloud/ros-cdk-brainindustrial.RosPidOrganizationProps")]
    public interface IRosPidOrganizationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: pidOrganizationName: PidOrganizationName
        /// </remarks>
        [JsiiProperty(name: "pidOrganizationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PidOrganizationName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: parentPidOrganizationId: ParentPidOrganizationId
        /// </remarks>
        [JsiiProperty(name: "parentPidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ParentPidOrganizationId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPidOrganization`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidorganization
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPidOrganizationProps), fullyQualifiedName: "@alicloud/ros-cdk-brainindustrial.RosPidOrganizationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Brainindustrial.IRosPidOrganizationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: pidOrganizationName: PidOrganizationName
            /// </remarks>
            [JsiiProperty(name: "pidOrganizationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PidOrganizationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: parentPidOrganizationId: ParentPidOrganizationId
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parentPidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ParentPidOrganizationId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
