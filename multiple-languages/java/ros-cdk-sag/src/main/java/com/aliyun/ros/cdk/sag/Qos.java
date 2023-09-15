package com.aliyun.ros.cdk.sag;

/**
 * A ROS resource type:  <code>ALIYUN::SAG::Qos</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.309Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.Qos")
public class Qos extends com.aliyun.ros.cdk.core.Resource {

    protected Qos(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Qos(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::SAG::Qos</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Qos(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.QosProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::SAG::Qos</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Qos(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.QosProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute QosId: The ID of the QoS policy.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrQosId() {
        return software.amazon.jsii.Kernel.get(this, "attrQosId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.Qos}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.Qos> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sag.QosProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.QosProps.Builder();
        }

        /**
         * Property qosName: The name of the QoS policy.
         * <p>
         * The name must be 2 to 100 characters in length and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param qosName Property qosName: The name of the QoS policy. This parameter is required.
         */
        public Builder qosName(final java.lang.String qosName) {
            this.props.qosName(qosName);
            return this;
        }
        /**
         * Property qosName: The name of the QoS policy.
         * <p>
         * The name must be 2 to 100 characters in length and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param qosName Property qosName: The name of the QoS policy. This parameter is required.
         */
        public Builder qosName(final com.aliyun.ros.cdk.core.IResolvable qosName) {
            this.props.qosName(qosName);
            return this;
        }

        /**
         * Property qosDescription: The description of the QoS policy.
         * <p>
         * The description must be 1 to 512 characters in length and can contain letters, digits,
         * underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param qosDescription Property qosDescription: The description of the QoS policy. This parameter is required.
         */
        public Builder qosDescription(final java.lang.String qosDescription) {
            this.props.qosDescription(qosDescription);
            return this;
        }
        /**
         * Property qosDescription: The description of the QoS policy.
         * <p>
         * The description must be 1 to 512 characters in length and can contain letters, digits,
         * underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param qosDescription Property qosDescription: The description of the QoS policy. This parameter is required.
         */
        public Builder qosDescription(final com.aliyun.ros.cdk.core.IResolvable qosDescription) {
            this.props.qosDescription(qosDescription);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sag.Qos}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.Qos build() {
            return new com.aliyun.ros.cdk.sag.Qos(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
