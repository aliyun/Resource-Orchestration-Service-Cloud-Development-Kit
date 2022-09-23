using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosOutput), fullyQualifiedName: "@alicloud/ros-cdk-core.RosOutput", parametersJson: "[{\"docs\":{\"summary\":\"The parent construct.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"RosOutput properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosOutputProps\"}}]")]
    public class RosOutput : AlibabaCloud.SDK.ROS.CDK.Core.RosElement
    {
        /// <summary>Creates an RosOutput value for this stack.</summary>
        /// <param name="scope">The parent construct.</param>
        /// <param name="props">RosOutput properties.</param>
        public RosOutput(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IRosOutputProps props): base(_MakeDeputyProps(scope, id, props))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IRosOutputProps props)
        {
            return new DeputyProps(new object?[]{scope, id, props});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosOutput(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosOutput(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "addCondition", parametersJson: "[{\"name\":\"condition\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosCondition\"}}]")]
        public virtual void AddCondition(AlibabaCloud.SDK.ROS.CDK.Core.RosCondition condition)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosCondition)}, new object[]{condition});
        }
    }
}
