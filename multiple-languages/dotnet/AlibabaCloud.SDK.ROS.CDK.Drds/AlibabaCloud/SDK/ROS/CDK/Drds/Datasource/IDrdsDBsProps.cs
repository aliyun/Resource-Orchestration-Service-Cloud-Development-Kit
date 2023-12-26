using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds.Datasource
{
    /// <summary>Properties for defining a `DrdsDBs`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDrdsDBsProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.DrdsDBsProps")]
    public interface IDrdsDBsProps
    {
        /// <summary>Property instanceId: Drds Instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `DrdsDBs`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDrdsDBsProps), fullyQualifiedName: "@alicloud/ros-cdk-drds.datasource.DrdsDBsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.Datasource.IDrdsDBsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: Drds Instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
