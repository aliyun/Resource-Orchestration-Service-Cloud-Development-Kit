package com.aliyun.ros.cdk.drds;

/**
 * A ROS template type:  `ALIYUN::DRDS::DrdsDB`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:40.993Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.RosDrdsDB")
public class RosDrdsDB extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDrdsDB(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDrdsDB(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.drds.RosDrdsDB.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::DRDS::DrdsDB`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDrdsDB(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.RosDrdsDBProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDrdsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "drdsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDrdsInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "drdsInstanceId", java.util.Objects.requireNonNull(value, "drdsInstanceId is required"));
    }

    /**
     */
    public void setDrdsInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "drdsInstanceId", java.util.Objects.requireNonNull(value, "drdsInstanceId is required"));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccountName() {
        return software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccountName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accountName", value);
    }

    /**
     */
    public void setAccountName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accountName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceIsCreating() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceIsCreating", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstanceIsCreating(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceIsCreating", value);
    }

    /**
     */
    public void setDbInstanceIsCreating(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceIsCreating", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbInstType() {
        return software.amazon.jsii.Kernel.get(this, "dbInstType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbInstType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstType", value);
    }

    /**
     */
    public void setDbInstType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbInstType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDbName() {
        return software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbName", value);
    }

    /**
     */
    public void setDbName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEncode() {
        return software.amazon.jsii.Kernel.get(this, "encode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEncode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "encode", value);
    }

    /**
     */
    public void setEncode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "encode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstDbName() {
        return software.amazon.jsii.Kernel.get(this, "instDbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstDbName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instDbName", value);
    }

    /**
     */
    public void setInstDbName(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "instDbName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRdsInstance() {
        return software.amazon.jsii.Kernel.get(this, "rdsInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRdsInstance(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rdsInstance", value);
    }

    /**
     */
    public void setRdsInstance(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "rdsInstance", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "type", value);
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "type", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty")
    @software.amazon.jsii.Jsii.Proxy(InstDbNameProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InstDbNameProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getShardDbName();

        /**
         * @return a {@link Builder} of {@link InstDbNameProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InstDbNameProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InstDbNameProperty> {
            java.lang.Object dbInstanceId;
            java.lang.Object shardDbName;

            /**
             * Sets the value of {@link InstDbNameProperty#getDbInstanceId}
             * @param dbInstanceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbInstanceId(java.lang.String dbInstanceId) {
                this.dbInstanceId = dbInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link InstDbNameProperty#getDbInstanceId}
             * @param dbInstanceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
                this.dbInstanceId = dbInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link InstDbNameProperty#getShardDbName}
             * @param shardDbName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder shardDbName(com.aliyun.ros.cdk.core.IResolvable shardDbName) {
                this.shardDbName = shardDbName;
                return this;
            }

            /**
             * Sets the value of {@link InstDbNameProperty#getShardDbName}
             * @param shardDbName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder shardDbName(java.util.List<? extends java.lang.Object> shardDbName) {
                this.shardDbName = shardDbName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InstDbNameProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InstDbNameProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InstDbNameProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstDbNameProperty {
            private final java.lang.Object dbInstanceId;
            private final java.lang.Object shardDbName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.shardDbName = software.amazon.jsii.Kernel.get(this, "shardDbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
                this.shardDbName = java.util.Objects.requireNonNull(builder.shardDbName, "shardDbName is required");
            }

            @Override
            public final java.lang.Object getDbInstanceId() {
                return this.dbInstanceId;
            }

            @Override
            public final java.lang.Object getShardDbName() {
                return this.shardDbName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
                data.set("shardDbName", om.valueToTree(this.getShardDbName()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InstDbNameProperty.Jsii$Proxy that = (InstDbNameProperty.Jsii$Proxy) o;

                if (!dbInstanceId.equals(that.dbInstanceId)) return false;
                return this.shardDbName.equals(that.shardDbName);
            }

            @Override
            public final int hashCode() {
                int result = this.dbInstanceId.hashCode();
                result = 31 * result + (this.shardDbName.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.drds.RosDrdsDB}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.drds.RosDrdsDB> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.drds.RosDrdsDBProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.drds.RosDrdsDBProps.Builder();
        }

        /**
         * @return {@code this}
         * @param drdsInstanceId This parameter is required.
         */
        public Builder drdsInstanceId(final java.lang.String drdsInstanceId) {
            this.props.drdsInstanceId(drdsInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param drdsInstanceId This parameter is required.
         */
        public Builder drdsInstanceId(final com.aliyun.ros.cdk.core.IResolvable drdsInstanceId) {
            this.props.drdsInstanceId(drdsInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param accountName This parameter is required.
         */
        public Builder accountName(final java.lang.String accountName) {
            this.props.accountName(accountName);
            return this;
        }
        /**
         * @return {@code this}
         * @param accountName This parameter is required.
         */
        public Builder accountName(final com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.props.accountName(accountName);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceIsCreating This parameter is required.
         */
        public Builder dbInstanceIsCreating(final java.lang.Boolean dbInstanceIsCreating) {
            this.props.dbInstanceIsCreating(dbInstanceIsCreating);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstanceIsCreating This parameter is required.
         */
        public Builder dbInstanceIsCreating(final com.aliyun.ros.cdk.core.IResolvable dbInstanceIsCreating) {
            this.props.dbInstanceIsCreating(dbInstanceIsCreating);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstType This parameter is required.
         */
        public Builder dbInstType(final java.lang.String dbInstType) {
            this.props.dbInstType(dbInstType);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbInstType This parameter is required.
         */
        public Builder dbInstType(final com.aliyun.ros.cdk.core.IResolvable dbInstType) {
            this.props.dbInstType(dbInstType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbName This parameter is required.
         */
        public Builder dbName(final java.lang.String dbName) {
            this.props.dbName(dbName);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbName This parameter is required.
         */
        public Builder dbName(final com.aliyun.ros.cdk.core.IResolvable dbName) {
            this.props.dbName(dbName);
            return this;
        }

        /**
         * @return {@code this}
         * @param encode This parameter is required.
         */
        public Builder encode(final java.lang.String encode) {
            this.props.encode(encode);
            return this;
        }
        /**
         * @return {@code this}
         * @param encode This parameter is required.
         */
        public Builder encode(final com.aliyun.ros.cdk.core.IResolvable encode) {
            this.props.encode(encode);
            return this;
        }

        /**
         * @return {@code this}
         * @param instDbName This parameter is required.
         */
        public Builder instDbName(final com.aliyun.ros.cdk.core.IResolvable instDbName) {
            this.props.instDbName(instDbName);
            return this;
        }
        /**
         * @return {@code this}
         * @param instDbName This parameter is required.
         */
        public Builder instDbName(final java.util.List<? extends java.lang.Object> instDbName) {
            this.props.instDbName(instDbName);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param rdsInstance This parameter is required.
         */
        public Builder rdsInstance(final com.aliyun.ros.cdk.core.IResolvable rdsInstance) {
            this.props.rdsInstance(rdsInstance);
            return this;
        }
        /**
         * @return {@code this}
         * @param rdsInstance This parameter is required.
         */
        public Builder rdsInstance(final java.util.List<? extends java.lang.Object> rdsInstance) {
            this.props.rdsInstance(rdsInstance);
            return this;
        }

        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.drds.RosDrdsDB}.
         */
        @Override
        public com.aliyun.ros.cdk.drds.RosDrdsDB build() {
            return new com.aliyun.ros.cdk.drds.RosDrdsDB(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
