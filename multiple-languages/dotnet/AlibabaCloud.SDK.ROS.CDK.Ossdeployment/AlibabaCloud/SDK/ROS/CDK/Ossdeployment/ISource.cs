using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ossdeployment
{
    /// <summary>Represents a source for bucket deployments.</summary>
    [JsiiInterface(nativeType: typeof(ISource), fullyQualifiedName: "@alicloud/ros-cdk-ossdeployment.ISource")]
    public interface ISource
    {
        /// <summary>Binds the source to a bucket deployment.</summary>
        /// <param name="scope">The construct tree context.</param>
        [JsiiMethod(name: "bind", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ossdeployment.SourceConfig\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The construct tree context.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}}]")]
        AlibabaCloud.SDK.ROS.CDK.Ossdeployment.ISourceConfig Bind(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope);

        /// <summary>Represents a source for bucket deployments.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISource), fullyQualifiedName: "@alicloud/ros-cdk-ossdeployment.ISource")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ossdeployment.ISource
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Binds the source to a bucket deployment.</summary>
            /// <param name="scope">The construct tree context.</param>
            [JsiiMethod(name: "bind", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-ossdeployment.SourceConfig\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The construct tree context.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}}]")]
            public AlibabaCloud.SDK.ROS.CDK.Ossdeployment.ISourceConfig Bind(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope)
            {
                return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Ossdeployment.ISourceConfig>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Construct)}, new object[]{scope})!;
            }
        }
    }
}
