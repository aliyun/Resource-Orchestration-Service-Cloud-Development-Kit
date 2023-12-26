using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Brainindustrial
{
    /// <summary>Properties for defining a `RosPidProject`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidproject
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPidProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-brainindustrial.RosPidProjectProps")]
    public interface IRosPidProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: pidOrganizationId: PidOrganizationId
        /// </remarks>
        [JsiiProperty(name: "pidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PidOrganizationId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pidProjectName: PidProjectName
        /// </remarks>
        [JsiiProperty(name: "pidProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PidProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pidProjectDesc: PidProjectDesc
        /// </remarks>
        [JsiiProperty(name: "pidProjectDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PidProjectDesc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPidProject`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidproject
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPidProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-brainindustrial.RosPidProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Brainindustrial.IRosPidProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: pidOrganizationId: PidOrganizationId
            /// </remarks>
            [JsiiProperty(name: "pidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PidOrganizationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pidProjectName: PidProjectName
            /// </remarks>
            [JsiiProperty(name: "pidProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PidProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pidProjectDesc: PidProjectDesc
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pidProjectDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PidProjectDesc
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
