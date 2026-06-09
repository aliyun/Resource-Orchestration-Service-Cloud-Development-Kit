package com.aliyun.ros.cdk.gpdb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GPDB::Database</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:13:37.713Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.Database")
public class Database extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.gpdb.IDatabase {

    protected Database(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Database(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Database(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DatabaseProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Database(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DatabaseProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccessPrivilege: Permission Control Information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessPrivilege() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessPrivilege", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CharacterSetName: Character set, default value is UTF8.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCharacterSetName() {
        return software.amazon.jsii.Kernel.get(this, "attrCharacterSetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Collate: Database locale parameters, specifying string comparison/collation.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCollate() {
        return software.amazon.jsii.Kernel.get(this, "attrCollate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ConnLimit: Maximum connection limit,-1 means unrestricted.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConnLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrConnLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Ctype: Database locale parameters, specifying character classification/case conversion rules.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCtype() {
        return software.amazon.jsii.Kernel.get(this, "attrCtype", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DatabaseName: Database Name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDatabaseName() {
        return software.amazon.jsii.Kernel.get(this, "attrDatabaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstanceId: Instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: Database Description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Owner: Data Sheet owner.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwner() {
        return software.amazon.jsii.Kernel.get(this, "attrOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Size: Database size.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSize() {
        return software.amazon.jsii.Kernel.get(this, "attrSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TableSpace: Database table space.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTableSpace() {
        return software.amazon.jsii.Kernel.get(this, "attrTableSpace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.gpdb.DatabaseProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.DatabaseProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.gpdb.Database}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.gpdb.Database> {
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
        private final com.aliyun.ros.cdk.gpdb.DatabaseProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.gpdb.DatabaseProps.Builder();
        }

        /**
         * Property databaseName: Database Name.
         * <p>
         * @return {@code this}
         * @param databaseName Property databaseName: Database Name. This parameter is required.
         */
        public Builder databaseName(final java.lang.String databaseName) {
            this.props.databaseName(databaseName);
            return this;
        }
        /**
         * Property databaseName: Database Name.
         * <p>
         * @return {@code this}
         * @param databaseName Property databaseName: Database Name. This parameter is required.
         */
        public Builder databaseName(final com.aliyun.ros.cdk.core.IResolvable databaseName) {
            this.props.databaseName(databaseName);
            return this;
        }

        /**
         * Property dbInstanceId: Instance ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Instance ID. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: Instance ID.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Instance ID. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property owner: Data Sheet owner.
         * <p>
         * @return {@code this}
         * @param owner Property owner: Data Sheet owner. This parameter is required.
         */
        public Builder owner(final java.lang.String owner) {
            this.props.owner(owner);
            return this;
        }
        /**
         * Property owner: Data Sheet owner.
         * <p>
         * @return {@code this}
         * @param owner Property owner: Data Sheet owner. This parameter is required.
         */
        public Builder owner(final com.aliyun.ros.cdk.core.IResolvable owner) {
            this.props.owner(owner);
            return this;
        }

        /**
         * Property characterSetName: Character set, default value is UTF8.
         * <p>
         * @return {@code this}
         * @param characterSetName Property characterSetName: Character set, default value is UTF8. This parameter is required.
         */
        public Builder characterSetName(final java.lang.String characterSetName) {
            this.props.characterSetName(characterSetName);
            return this;
        }
        /**
         * Property characterSetName: Character set, default value is UTF8.
         * <p>
         * @return {@code this}
         * @param characterSetName Property characterSetName: Character set, default value is UTF8. This parameter is required.
         */
        public Builder characterSetName(final com.aliyun.ros.cdk.core.IResolvable characterSetName) {
            this.props.characterSetName(characterSetName);
            return this;
        }

        /**
         * Property collate: Database locale parameters, specifying string comparison/collation.
         * <p>
         * @return {@code this}
         * @param collate Property collate: Database locale parameters, specifying string comparison/collation. This parameter is required.
         */
        public Builder collate(final java.lang.String collate) {
            this.props.collate(collate);
            return this;
        }
        /**
         * Property collate: Database locale parameters, specifying string comparison/collation.
         * <p>
         * @return {@code this}
         * @param collate Property collate: Database locale parameters, specifying string comparison/collation. This parameter is required.
         */
        public Builder collate(final com.aliyun.ros.cdk.core.IResolvable collate) {
            this.props.collate(collate);
            return this;
        }

        /**
         * Property ctype: Database locale parameters, specifying character classification/case conversion rules.
         * <p>
         * @return {@code this}
         * @param ctype Property ctype: Database locale parameters, specifying character classification/case conversion rules. This parameter is required.
         */
        public Builder ctype(final java.lang.String ctype) {
            this.props.ctype(ctype);
            return this;
        }
        /**
         * Property ctype: Database locale parameters, specifying character classification/case conversion rules.
         * <p>
         * @return {@code this}
         * @param ctype Property ctype: Database locale parameters, specifying character classification/case conversion rules. This parameter is required.
         */
        public Builder ctype(final com.aliyun.ros.cdk.core.IResolvable ctype) {
            this.props.ctype(ctype);
            return this;
        }

        /**
         * Property description: Database Description.
         * <p>
         * @return {@code this}
         * @param description Property description: Database Description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Database Description.
         * <p>
         * @return {@code this}
         * @param description Property description: Database Description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.gpdb.Database}.
         */
        @Override
        public com.aliyun.ros.cdk.gpdb.Database build() {
            return new com.aliyun.ros.cdk.gpdb.Database(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
