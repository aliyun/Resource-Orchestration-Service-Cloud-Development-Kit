using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::DRDS::DrdsDBs`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDrdsDBsProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.RosDrdsDBsProps")]
    public interface IRosDrdsDBsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: Drds Instance ID.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `DATASOURCE::DRDS::DrdsDBs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDrdsDBsProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.RosDrdsDBsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IRosDrdsDBsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Drds Instance ID.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
