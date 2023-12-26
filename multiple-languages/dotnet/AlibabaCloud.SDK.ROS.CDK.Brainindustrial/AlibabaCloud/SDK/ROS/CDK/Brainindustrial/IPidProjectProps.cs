using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Brainindustrial
{
    /// <summary>Properties for defining a `PidProject`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidproject
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPidProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-brainindustrial.PidProjectProps")]
    public interface IPidProjectProps
    {
        /// <summary>Property pidOrganizationId: PidOrganizationId.</summary>
        [JsiiProperty(name: "pidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PidOrganizationId
        {
            get;
        }

        /// <summary>Property pidProjectName: PidProjectName.</summary>
        [JsiiProperty(name: "pidProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PidProjectName
        {
            get;
        }

        /// <summary>Property pidProjectDesc: PidProjectDesc.</summary>
        [JsiiProperty(name: "pidProjectDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PidProjectDesc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PidProject`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidproject
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPidProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-brainindustrial.PidProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Brainindustrial.IPidProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property pidOrganizationId: PidOrganizationId.</summary>
            [JsiiProperty(name: "pidOrganizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PidOrganizationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pidProjectName: PidProjectName.</summary>
            [JsiiProperty(name: "pidProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PidProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pidProjectDesc: PidProjectDesc.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "pidProjectDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PidProjectDesc
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
