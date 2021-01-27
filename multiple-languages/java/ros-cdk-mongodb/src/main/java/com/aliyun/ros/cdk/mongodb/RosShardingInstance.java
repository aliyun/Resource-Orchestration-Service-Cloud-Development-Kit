package com.aliyun.ros.cdk.mongodb;

/**
 * A ROS template type:  `ALIYUN::MONGODB::ShardingInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.092Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosShardingInstance")
public class RosShardingInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosShardingInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosShardingInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.mongodb.RosShardingInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::MONGODB::ShardingInstance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosShardingInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mongodb.RosShardingInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConfigServer() {
        return software.amazon.jsii.Kernel.get(this, "configServer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfigServer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configServer", java.util.Objects.requireNonNull(value, "configServer is required"));
    }

    /**
     */
    public void setConfigServer(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "configServer", java.util.Objects.requireNonNull(value, "configServer is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMongos() {
        return software.amazon.jsii.Kernel.get(this, "mongos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMongos(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mongos", java.util.Objects.requireNonNull(value, "mongos is required"));
    }

    /**
     */
    public void setMongos(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "mongos", java.util.Objects.requireNonNull(value, "mongos is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReplicaSet() {
        return software.amazon.jsii.Kernel.get(this, "replicaSet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReplicaSet(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "replicaSet", java.util.Objects.requireNonNull(value, "replicaSet is required"));
    }

    /**
     */
    public void setReplicaSet(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "replicaSet", java.util.Objects.requireNonNull(value, "replicaSet is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getAccountPassword() {
        return software.amazon.jsii.Kernel.get(this, "accountPassword", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setAccountPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "accountPassword", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getChargeType() {
        return software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDbInstanceDescription() {
        return software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDbInstanceDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbInstanceDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getEngineVersion() {
        return software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setEngineVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "engineVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "networkType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setNetworkType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "networkType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getProtocolType() {
        return software.amazon.jsii.Kernel.get(this, "protocolType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setProtocolType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "protocolType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRestoreTime() {
        return software.amazon.jsii.Kernel.get(this, "restoreTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRestoreTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "restoreTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSecurityIpArray() {
        return software.amazon.jsii.Kernel.get(this, "securityIpArray", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSecurityIpArray(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityIpArray", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSrcDbInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "srcDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSrcDbInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "srcDbInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getStorageEngine() {
        return software.amazon.jsii.Kernel.get(this, "storageEngine", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setStorageEngine(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageEngine", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosShardingInstance.ConfigServerProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigServerProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigServerProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getClassValue();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Number getStorage();

        /**
         * @return a {@link Builder} of {@link ConfigServerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigServerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigServerProperty> {
            private java.lang.String classValue;
            private java.lang.Number storage;

            /**
             * Sets the value of {@link ConfigServerProperty#getClassValue}
             * @param classValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder classValue(java.lang.String classValue) {
                this.classValue = classValue;
                return this;
            }

            /**
             * Sets the value of {@link ConfigServerProperty#getStorage}
             * @param storage the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storage(java.lang.Number storage) {
                this.storage = storage;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigServerProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigServerProperty build() {
                return new Jsii$Proxy(classValue, storage);
            }
        }

        /**
         * An implementation for {@link ConfigServerProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigServerProperty {
            private final java.lang.String classValue;
            private final java.lang.Number storage;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.classValue = software.amazon.jsii.Kernel.get(this, "class", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.storage = software.amazon.jsii.Kernel.get(this, "storage", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String classValue, final java.lang.Number storage) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.classValue = java.util.Objects.requireNonNull(classValue, "classValue is required");
                this.storage = java.util.Objects.requireNonNull(storage, "storage is required");
            }

            @Override
            public final java.lang.String getClassValue() {
                return this.classValue;
            }

            @Override
            public final java.lang.Number getStorage() {
                return this.storage;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("class", om.valueToTree(this.getClassValue()));
                data.set("storage", om.valueToTree(this.getStorage()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosShardingInstance.ConfigServerProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigServerProperty.Jsii$Proxy that = (ConfigServerProperty.Jsii$Proxy) o;

                if (!classValue.equals(that.classValue)) return false;
                return this.storage.equals(that.storage);
            }

            @Override
            public final int hashCode() {
                int result = this.classValue.hashCode();
                result = 31 * result + (this.storage.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosShardingInstance.MongosProperty")
    @software.amazon.jsii.Jsii.Proxy(MongosProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MongosProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getClassValue();

        /**
         * @return a {@link Builder} of {@link MongosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MongosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MongosProperty> {
            private java.lang.String classValue;

            /**
             * Sets the value of {@link MongosProperty#getClassValue}
             * @param classValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder classValue(java.lang.String classValue) {
                this.classValue = classValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MongosProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MongosProperty build() {
                return new Jsii$Proxy(classValue);
            }
        }

        /**
         * An implementation for {@link MongosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MongosProperty {
            private final java.lang.String classValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.classValue = software.amazon.jsii.Kernel.get(this, "class", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String classValue) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.classValue = java.util.Objects.requireNonNull(classValue, "classValue is required");
            }

            @Override
            public final java.lang.String getClassValue() {
                return this.classValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("class", om.valueToTree(this.getClassValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosShardingInstance.MongosProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MongosProperty.Jsii$Proxy that = (MongosProperty.Jsii$Proxy) o;

                return this.classValue.equals(that.classValue);
            }

            @Override
            public final int hashCode() {
                int result = this.classValue.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.RosShardingInstance.ReplicaSetProperty")
    @software.amazon.jsii.Jsii.Proxy(ReplicaSetProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ReplicaSetProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getClassValue();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Number getStorage();

        /**
         * @return a {@link Builder} of {@link ReplicaSetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ReplicaSetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ReplicaSetProperty> {
            private java.lang.String classValue;
            private java.lang.Number storage;

            /**
             * Sets the value of {@link ReplicaSetProperty#getClassValue}
             * @param classValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder classValue(java.lang.String classValue) {
                this.classValue = classValue;
                return this;
            }

            /**
             * Sets the value of {@link ReplicaSetProperty#getStorage}
             * @param storage the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder storage(java.lang.Number storage) {
                this.storage = storage;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ReplicaSetProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ReplicaSetProperty build() {
                return new Jsii$Proxy(classValue, storage);
            }
        }

        /**
         * An implementation for {@link ReplicaSetProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ReplicaSetProperty {
            private final java.lang.String classValue;
            private final java.lang.Number storage;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.classValue = software.amazon.jsii.Kernel.get(this, "class", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.storage = software.amazon.jsii.Kernel.get(this, "storage", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String classValue, final java.lang.Number storage) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.classValue = java.util.Objects.requireNonNull(classValue, "classValue is required");
                this.storage = java.util.Objects.requireNonNull(storage, "storage is required");
            }

            @Override
            public final java.lang.String getClassValue() {
                return this.classValue;
            }

            @Override
            public final java.lang.Number getStorage() {
                return this.storage;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("class", om.valueToTree(this.getClassValue()));
                data.set("storage", om.valueToTree(this.getStorage()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mongodb.RosShardingInstance.ReplicaSetProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ReplicaSetProperty.Jsii$Proxy that = (ReplicaSetProperty.Jsii$Proxy) o;

                if (!classValue.equals(that.classValue)) return false;
                return this.storage.equals(that.storage);
            }

            @Override
            public final int hashCode() {
                int result = this.classValue.hashCode();
                result = 31 * result + (this.storage.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.RosShardingInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.RosShardingInstance> {
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
        private final com.aliyun.ros.cdk.mongodb.RosShardingInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mongodb.RosShardingInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param configServer This parameter is required.
         */
        public Builder configServer(final com.aliyun.ros.cdk.core.IResolvable configServer) {
            this.props.configServer(configServer);
            return this;
        }
        /**
         * @return {@code this}
         * @param configServer This parameter is required.
         */
        public Builder configServer(final java.util.List<? extends java.lang.Object> configServer) {
            this.props.configServer(configServer);
            return this;
        }

        /**
         * @return {@code this}
         * @param mongos This parameter is required.
         */
        public Builder mongos(final com.aliyun.ros.cdk.core.IResolvable mongos) {
            this.props.mongos(mongos);
            return this;
        }
        /**
         * @return {@code this}
         * @param mongos This parameter is required.
         */
        public Builder mongos(final java.util.List<? extends java.lang.Object> mongos) {
            this.props.mongos(mongos);
            return this;
        }

        /**
         * @return {@code this}
         * @param replicaSet This parameter is required.
         */
        public Builder replicaSet(final com.aliyun.ros.cdk.core.IResolvable replicaSet) {
            this.props.replicaSet(replicaSet);
            return this;
        }
        /**
         * @return {@code this}
         * @param replicaSet This parameter is required.
         */
        public Builder replicaSet(final java.util.List<? extends java.lang.Object> replicaSet) {
            this.props.replicaSet(replicaSet);
            return this;
        }

        /**
         * @return {@code this}
         * @param accountPassword This parameter is required.
         */
        public Builder accountPassword(final java.lang.String accountPassword) {
            this.props.accountPassword(accountPassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param dbInstanceDescription This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props.dbInstanceDescription(dbInstanceDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param engineVersion This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkType This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param protocolType This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }

        /**
         * @return {@code this}
         * @param restoreTime This parameter is required.
         */
        public Builder restoreTime(final java.lang.String restoreTime) {
            this.props.restoreTime(restoreTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityIpArray This parameter is required.
         */
        public Builder securityIpArray(final java.lang.String securityIpArray) {
            this.props.securityIpArray(securityIpArray);
            return this;
        }

        /**
         * @return {@code this}
         * @param srcDbInstanceId This parameter is required.
         */
        public Builder srcDbInstanceId(final java.lang.String srcDbInstanceId) {
            this.props.srcDbInstanceId(srcDbInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageEngine This parameter is required.
         */
        public Builder storageEngine(final java.lang.String storageEngine) {
            this.props.storageEngine(storageEngine);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.mongodb.RosShardingInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.RosShardingInstance build() {
            return new com.aliyun.ros.cdk.mongodb.RosShardingInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
