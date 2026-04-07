package com.aliyun.ros.cdk.mongodb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MONGODB::AuditPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:31.599Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.AuditPolicy")
public class AuditPolicy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mongodb.IAuditPolicy {

    protected AuditPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AuditPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public AuditPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.AuditPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AuditPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.AuditPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AuditStatus: Audit state, Valid values: <code>enable</code>, <code>disabled</code>.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuditStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrAuditStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.AuditPolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mongodb.AuditPolicyProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.AuditPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.AuditPolicy> {
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
        private final com.aliyun.ros.cdk.mongodb.AuditPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mongodb.AuditPolicyProps.Builder();
        }

        /**
         * Property auditStatus: Audit state, Valid values: <code>enable</code>, <code>disabled</code>.
         * <p>
         * @return {@code this}
         * @param auditStatus Property auditStatus: Audit state, Valid values: <code>enable</code>, <code>disabled</code>. This parameter is required.
         */
        public Builder auditStatus(final java.lang.String auditStatus) {
            this.props.auditStatus(auditStatus);
            return this;
        }
        /**
         * Property auditStatus: Audit state, Valid values: <code>enable</code>, <code>disabled</code>.
         * <p>
         * @return {@code this}
         * @param auditStatus Property auditStatus: Audit state, Valid values: <code>enable</code>, <code>disabled</code>. This parameter is required.
         */
        public Builder auditStatus(final com.aliyun.ros.cdk.core.IResolvable auditStatus) {
            this.props.auditStatus(auditStatus);
            return this;
        }

        /**
         * Property dbInstanceId: Database Instance Id.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Database Instance Id. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: Database Instance Id.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Database Instance Id. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property storagePeriod: Audit log retention duration.
         * <p>
         * The value range is 1 to 365 days. The default value is 30 days.
         * <p>
         * @return {@code this}
         * @param storagePeriod Property storagePeriod: Audit log retention duration. This parameter is required.
         */
        public Builder storagePeriod(final java.lang.Number storagePeriod) {
            this.props.storagePeriod(storagePeriod);
            return this;
        }
        /**
         * Property storagePeriod: Audit log retention duration.
         * <p>
         * The value range is 1 to 365 days. The default value is 30 days.
         * <p>
         * @return {@code this}
         * @param storagePeriod Property storagePeriod: Audit log retention duration. This parameter is required.
         */
        public Builder storagePeriod(final com.aliyun.ros.cdk.core.IResolvable storagePeriod) {
            this.props.storagePeriod(storagePeriod);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mongodb.AuditPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.AuditPolicy build() {
            return new com.aliyun.ros.cdk.mongodb.AuditPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
