package com.aliyun.ros.cdk.sls;

/**
 * A ROS resource type:  `ALIYUN::SLS::Audit`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:22.101Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.Audit")
public class Audit extends com.aliyun.ros.cdk.core.Resource {

    protected Audit(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Audit(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SLS::Audit`.
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
    public Audit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.AuditProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SLS::Audit`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Audit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.AuditProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DisplayName: Name of SLS log audit.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.Audit}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.Audit> {
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
        private final com.aliyun.ros.cdk.sls.AuditProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.AuditProps.Builder();
        }

        /**
         * Property displayName: Name of SLS log audit.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Name of SLS log audit. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: Name of SLS log audit.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Name of SLS log audit. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * Property variableMap: Log audit detailed configuration.
         * <p>
         * @return {@code this}
         * @param variableMap Property variableMap: Log audit detailed configuration. This parameter is required.
         */
        public Builder variableMap(final com.aliyun.ros.cdk.core.IResolvable variableMap) {
            this.props.variableMap(variableMap);
            return this;
        }
        /**
         * Property variableMap: Log audit detailed configuration.
         * <p>
         * @return {@code this}
         * @param variableMap Property variableMap: Log audit detailed configuration. This parameter is required.
         */
        public Builder variableMap(final com.aliyun.ros.cdk.sls.RosAudit.VariableMapProperty variableMap) {
            this.props.variableMap(variableMap);
            return this;
        }

        /**
         * Property multiAccount: Multi-account configuration, please fill in multiple aliuid.
         * <p>
         * @return {@code this}
         * @param multiAccount Property multiAccount: Multi-account configuration, please fill in multiple aliuid. This parameter is required.
         */
        public Builder multiAccount(final com.aliyun.ros.cdk.core.IResolvable multiAccount) {
            this.props.multiAccount(multiAccount);
            return this;
        }
        /**
         * Property multiAccount: Multi-account configuration, please fill in multiple aliuid.
         * <p>
         * @return {@code this}
         * @param multiAccount Property multiAccount: Multi-account configuration, please fill in multiple aliuid. This parameter is required.
         */
        public Builder multiAccount(final java.util.List<? extends java.lang.Object> multiAccount) {
            this.props.multiAccount(multiAccount);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sls.Audit}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.Audit build() {
            return new com.aliyun.ros.cdk.sls.Audit(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
