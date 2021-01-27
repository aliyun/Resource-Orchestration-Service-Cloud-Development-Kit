package com.aliyun.ros.cdk.elasticsearch;

/**
 * A ROS template type:  `ALIYUN::ElasticSearch::Instance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.864Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.elasticsearch.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ElasticSearch::Instance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKibanaDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrKibanaDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKibanaPort() {
        return software.amazon.jsii.Kernel.get(this, "attrKibanaPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPort() {
        return software.amazon.jsii.Kernel.get(this, "attrPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDataNode() {
        return software.amazon.jsii.Kernel.get(this, "dataNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.elasticsearch.RosInstance.DataNodeProperty value) {
        software.amazon.jsii.Kernel.set(this, "dataNode", java.util.Objects.requireNonNull(value, "dataNode is required"));
    }

    /**
     */
    public void setDataNode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataNode", java.util.Objects.requireNonNull(value, "dataNode is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", java.util.Objects.requireNonNull(value, "password is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getVersion() {
        return software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "version", java.util.Objects.requireNonNull(value, "version is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setInstanceChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceChargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKibanaWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "kibanaWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKibanaWhitelist(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "kibanaWhitelist", value);
    }

    /**
     */
    public void setKibanaWhitelist(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kibanaWhitelist", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterNode() {
        return software.amazon.jsii.Kernel.get(this, "masterNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterNode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterNode", value);
    }

    /**
     */
    public void setMasterNode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.elasticsearch.RosInstance.MasterNodeProperty value) {
        software.amazon.jsii.Kernel.set(this, "masterNode", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrivateWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "privateWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrivateWhitelist(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "privateWhitelist", value);
    }

    /**
     */
    public void setPrivateWhitelist(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "privateWhitelist", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPublicWhitelist() {
        return software.amazon.jsii.Kernel.get(this, "publicWhitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPublicWhitelist(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "publicWhitelist", value);
    }

    /**
     */
    public void setPublicWhitelist(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "publicWhitelist", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.RosInstance.DataNodeProperty")
    @software.amazon.jsii.Jsii.Proxy(DataNodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DataNodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Number getAmount();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Number getDiskSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getDiskType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getSpec();

        /**
         * @return a {@link Builder} of {@link DataNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DataNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DataNodeProperty> {
            private java.lang.Number amount;
            private java.lang.Number diskSize;
            private java.lang.String diskType;
            private java.lang.String spec;

            /**
             * Sets the value of {@link DataNodeProperty#getAmount}
             * @param amount the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder amount(java.lang.Number amount) {
                this.amount = amount;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getDiskSize}
             * @param diskSize the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskSize(java.lang.Number diskSize) {
                this.diskSize = diskSize;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getDiskType}
             * @param diskType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskType(java.lang.String diskType) {
                this.diskType = diskType;
                return this;
            }

            /**
             * Sets the value of {@link DataNodeProperty#getSpec}
             * @param spec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spec(java.lang.String spec) {
                this.spec = spec;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DataNodeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DataNodeProperty build() {
                return new Jsii$Proxy(amount, diskSize, diskType, spec);
            }
        }

        /**
         * An implementation for {@link DataNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DataNodeProperty {
            private final java.lang.Number amount;
            private final java.lang.Number diskSize;
            private final java.lang.String diskType;
            private final java.lang.String spec;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.amount = software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.diskSize = software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Number amount, final java.lang.Number diskSize, final java.lang.String diskType, final java.lang.String spec) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.amount = java.util.Objects.requireNonNull(amount, "amount is required");
                this.diskSize = java.util.Objects.requireNonNull(diskSize, "diskSize is required");
                this.diskType = java.util.Objects.requireNonNull(diskType, "diskType is required");
                this.spec = java.util.Objects.requireNonNull(spec, "spec is required");
            }

            @Override
            public final java.lang.Number getAmount() {
                return this.amount;
            }

            @Override
            public final java.lang.Number getDiskSize() {
                return this.diskSize;
            }

            @Override
            public final java.lang.String getDiskType() {
                return this.diskType;
            }

            @Override
            public final java.lang.String getSpec() {
                return this.spec;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("amount", om.valueToTree(this.getAmount()));
                data.set("diskSize", om.valueToTree(this.getDiskSize()));
                data.set("diskType", om.valueToTree(this.getDiskType()));
                data.set("spec", om.valueToTree(this.getSpec()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearch.RosInstance.DataNodeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DataNodeProperty.Jsii$Proxy that = (DataNodeProperty.Jsii$Proxy) o;

                if (!amount.equals(that.amount)) return false;
                if (!diskSize.equals(that.diskSize)) return false;
                if (!diskType.equals(that.diskType)) return false;
                return this.spec.equals(that.spec);
            }

            @Override
            public final int hashCode() {
                int result = this.amount.hashCode();
                result = 31 * result + (this.diskSize.hashCode());
                result = 31 * result + (this.diskType.hashCode());
                result = 31 * result + (this.spec.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.elasticsearch.$Module.class, fqn = "@alicloud/ros-cdk-elasticsearch.RosInstance.MasterNodeProperty")
    @software.amazon.jsii.Jsii.Proxy(MasterNodeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MasterNodeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getSpec();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getAmount() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Number getDiskSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDiskType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MasterNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MasterNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MasterNodeProperty> {
            private java.lang.String spec;
            private java.lang.Number amount;
            private java.lang.Number diskSize;
            private java.lang.String diskType;

            /**
             * Sets the value of {@link MasterNodeProperty#getSpec}
             * @param spec the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder spec(java.lang.String spec) {
                this.spec = spec;
                return this;
            }

            /**
             * Sets the value of {@link MasterNodeProperty#getAmount}
             * @param amount the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder amount(java.lang.Number amount) {
                this.amount = amount;
                return this;
            }

            /**
             * Sets the value of {@link MasterNodeProperty#getDiskSize}
             * @param diskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskSize(java.lang.Number diskSize) {
                this.diskSize = diskSize;
                return this;
            }

            /**
             * Sets the value of {@link MasterNodeProperty#getDiskType}
             * @param diskType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskType(java.lang.String diskType) {
                this.diskType = diskType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MasterNodeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MasterNodeProperty build() {
                return new Jsii$Proxy(spec, amount, diskSize, diskType);
            }
        }

        /**
         * An implementation for {@link MasterNodeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MasterNodeProperty {
            private final java.lang.String spec;
            private final java.lang.Number amount;
            private final java.lang.Number diskSize;
            private final java.lang.String diskType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.amount = software.amazon.jsii.Kernel.get(this, "amount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.diskSize = software.amazon.jsii.Kernel.get(this, "diskSize", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
                this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String spec, final java.lang.Number amount, final java.lang.Number diskSize, final java.lang.String diskType) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.spec = java.util.Objects.requireNonNull(spec, "spec is required");
                this.amount = amount;
                this.diskSize = diskSize;
                this.diskType = diskType;
            }

            @Override
            public final java.lang.String getSpec() {
                return this.spec;
            }

            @Override
            public final java.lang.Number getAmount() {
                return this.amount;
            }

            @Override
            public final java.lang.Number getDiskSize() {
                return this.diskSize;
            }

            @Override
            public final java.lang.String getDiskType() {
                return this.diskType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("spec", om.valueToTree(this.getSpec()));
                if (this.getAmount() != null) {
                    data.set("amount", om.valueToTree(this.getAmount()));
                }
                if (this.getDiskSize() != null) {
                    data.set("diskSize", om.valueToTree(this.getDiskSize()));
                }
                if (this.getDiskType() != null) {
                    data.set("diskType", om.valueToTree(this.getDiskType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-elasticsearch.RosInstance.MasterNodeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MasterNodeProperty.Jsii$Proxy that = (MasterNodeProperty.Jsii$Proxy) o;

                if (!spec.equals(that.spec)) return false;
                if (this.amount != null ? !this.amount.equals(that.amount) : that.amount != null) return false;
                if (this.diskSize != null ? !this.diskSize.equals(that.diskSize) : that.diskSize != null) return false;
                return this.diskType != null ? this.diskType.equals(that.diskType) : that.diskType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.spec.hashCode();
                result = 31 * result + (this.amount != null ? this.amount.hashCode() : 0);
                result = 31 * result + (this.diskSize != null ? this.diskSize.hashCode() : 0);
                result = 31 * result + (this.diskType != null ? this.diskType.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.elasticsearch.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.elasticsearch.RosInstance> {
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
        private final com.aliyun.ros.cdk.elasticsearch.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.elasticsearch.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dataNode This parameter is required.
         */
        public Builder dataNode(final com.aliyun.ros.cdk.elasticsearch.RosInstance.DataNodeProperty dataNode) {
            this.props.dataNode(dataNode);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataNode This parameter is required.
         */
        public Builder dataNode(final com.aliyun.ros.cdk.core.IResolvable dataNode) {
            this.props.dataNode(dataNode);
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
         * @param version This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
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
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceChargeType This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param kibanaWhitelist This parameter is required.
         */
        public Builder kibanaWhitelist(final java.util.List<? extends java.lang.Object> kibanaWhitelist) {
            this.props.kibanaWhitelist(kibanaWhitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param kibanaWhitelist This parameter is required.
         */
        public Builder kibanaWhitelist(final com.aliyun.ros.cdk.core.IResolvable kibanaWhitelist) {
            this.props.kibanaWhitelist(kibanaWhitelist);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterNode This parameter is required.
         */
        public Builder masterNode(final com.aliyun.ros.cdk.core.IResolvable masterNode) {
            this.props.masterNode(masterNode);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterNode This parameter is required.
         */
        public Builder masterNode(final com.aliyun.ros.cdk.elasticsearch.RosInstance.MasterNodeProperty masterNode) {
            this.props.masterNode(masterNode);
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
         * @param privateWhitelist This parameter is required.
         */
        public Builder privateWhitelist(final java.util.List<? extends java.lang.Object> privateWhitelist) {
            this.props.privateWhitelist(privateWhitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param privateWhitelist This parameter is required.
         */
        public Builder privateWhitelist(final com.aliyun.ros.cdk.core.IResolvable privateWhitelist) {
            this.props.privateWhitelist(privateWhitelist);
            return this;
        }

        /**
         * @return {@code this}
         * @param publicWhitelist This parameter is required.
         */
        public Builder publicWhitelist(final java.util.List<? extends java.lang.Object> publicWhitelist) {
            this.props.publicWhitelist(publicWhitelist);
            return this;
        }
        /**
         * @return {@code this}
         * @param publicWhitelist This parameter is required.
         */
        public Builder publicWhitelist(final com.aliyun.ros.cdk.core.IResolvable publicWhitelist) {
            this.props.publicWhitelist(publicWhitelist);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.elasticsearch.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.elasticsearch.RosInstance build() {
            return new com.aliyun.ros.cdk.elasticsearch.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
