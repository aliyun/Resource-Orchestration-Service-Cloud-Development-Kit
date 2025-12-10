package com.aliyun.ros.cdk.dms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DMS::ScriptExecution</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:54.565Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dms.$Module.class, fqn = "@alicloud/ros-cdk-dms.ScriptExecution")
public class ScriptExecution extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dms.IScriptExecution {

    protected ScriptExecution(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ScriptExecution(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ScriptExecution(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.ScriptExecutionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ScriptExecution(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.ScriptExecutionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dms.ScriptExecutionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dms.ScriptExecutionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dms.ScriptExecution}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dms.ScriptExecution> {
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
        private final com.aliyun.ros.cdk.dms.ScriptExecutionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dms.ScriptExecutionProps.Builder();
        }

        /**
         * Property dbId: The database ID.
         * <p>
         * <blockquote>
         * <p>
         * This parameter corresponds to the DatabaseId parameter in interfaces like SearchDatabase, ListDatabases, GetDatabase, etc. You can call these interfaces to obtain the value.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbId Property dbId: The database ID. This parameter is required.
         */
        public Builder dbId(final java.lang.Number dbId) {
            this.props.dbId(dbId);
            return this;
        }
        /**
         * Property dbId: The database ID.
         * <p>
         * <blockquote>
         * <p>
         * This parameter corresponds to the DatabaseId parameter in interfaces like SearchDatabase, ListDatabases, GetDatabase, etc. You can call these interfaces to obtain the value.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param dbId Property dbId: The database ID. This parameter is required.
         */
        public Builder dbId(final com.aliyun.ros.cdk.core.IResolvable dbId) {
            this.props.dbId(dbId);
            return this;
        }

        /**
         * Property logic: Whether it is a logical database.
         * <p>
         * @return {@code this}
         * @param logic Property logic: Whether it is a logical database. This parameter is required.
         */
        public Builder logic(final java.lang.Boolean logic) {
            this.props.logic(logic);
            return this;
        }
        /**
         * Property logic: Whether it is a logical database.
         * <p>
         * @return {@code this}
         * @param logic Property logic: Whether it is a logical database. This parameter is required.
         */
        public Builder logic(final com.aliyun.ros.cdk.core.IResolvable logic) {
            this.props.logic(logic);
            return this;
        }

        /**
         * Property script: The specific SQL script to execute.
         * <p>
         * Includes DQL, DDL, and DML. Whether DDL and DML are allowed depends on the security configuration of the instance.
         * <p>
         * @return {@code this}
         * @param script Property script: The specific SQL script to execute. This parameter is required.
         */
        public Builder script(final java.lang.String script) {
            this.props.script(script);
            return this;
        }
        /**
         * Property script: The specific SQL script to execute.
         * <p>
         * Includes DQL, DDL, and DML. Whether DDL and DML are allowed depends on the security configuration of the instance.
         * <p>
         * @return {@code this}
         * @param script Property script: The specific SQL script to execute. This parameter is required.
         */
        public Builder script(final com.aliyun.ros.cdk.core.IResolvable script) {
            this.props.script(script);
            return this;
        }

        /**
         * Property tid: The tenant ID.
         * <p>
         * <blockquote>
         * <p>
         * Obtain this from the tenant ID information displayed when hovering over the top-right corner avatar.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param tid Property tid: The tenant ID. This parameter is required.
         */
        public Builder tid(final java.lang.Number tid) {
            this.props.tid(tid);
            return this;
        }
        /**
         * Property tid: The tenant ID.
         * <p>
         * <blockquote>
         * <p>
         * Obtain this from the tenant ID information displayed when hovering over the top-right corner avatar.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param tid Property tid: The tenant ID. This parameter is required.
         */
        public Builder tid(final com.aliyun.ros.cdk.core.IResolvable tid) {
            this.props.tid(tid);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dms.ScriptExecution}.
         */
        @Override
        public com.aliyun.ros.cdk.dms.ScriptExecution build() {
            return new com.aliyun.ros.cdk.dms.ScriptExecution(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
