using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ossdeployment
{
    /// <summary>`BucketDeployment` populates an OSS bucket with the contents of .zip files from other OSS buckets or from local disk.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ossdeployment.BucketDeployment), fullyQualifiedName: "@alicloud/ros-cdk-ossdeployment.BucketDeployment", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ossdeployment.BucketDeploymentProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class BucketDeployment : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        public BucketDeployment(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ossdeployment.IBucketDeploymentProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ossdeployment.IBucketDeploymentProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected BucketDeployment(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected BucketDeployment(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute cr: Custom resource to trigger the bucket deployment.</summary>
        [JsiiProperty(name: "cr", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ros.RosCustomResource\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ros.RosCustomResource Cr
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ros.RosCustomResource>()!;
        }

        /// <summary>Attribute fcFunction: FC function to use to forward content to the destination bucket.</summary>
        [JsiiProperty(name: "fcFunction", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc.Function\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Fc.Function FcFunction
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fc.Function>()!;
        }

        /// <summary>Attribute fcService: FC service to use to forward content to the destination bucket.</summary>
        [JsiiProperty(name: "fcService", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc.Service\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Fc.Service FcService
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fc.Service>()!;
        }

        [JsiiProperty(name: "handlerRoleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object HandlerRoleArn
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
