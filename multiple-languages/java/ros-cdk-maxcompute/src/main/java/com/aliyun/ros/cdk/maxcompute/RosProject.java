package com.aliyun.ros.cdk.maxcompute;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::MaxCompute::Project</code>, which is used to create a MaxCompute project.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:52.807Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.RosProject")
public class RosProject extends com.aliyun.ros.cdk.core.RosResource {

    protected RosProject(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosProject(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.maxcompute.RosProject.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosProject(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.maxcompute.RosProjectProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
        return software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setComment(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "comment", value);
    }

    /**
     */
    public void setComment(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "comment", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDefaultQuota() {
        return software.amazon.jsii.Kernel.get(this, "defaultQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefaultQuota(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defaultQuota", value);
    }

    /**
     */
    public void setDefaultQuota(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defaultQuota", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpWhiteList() {
        return software.amazon.jsii.Kernel.get(this, "ipWhiteList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpWhiteList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipWhiteList", value);
    }

    /**
     */
    public void setIpWhiteList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.maxcompute.RosProject.IpWhiteListProperty value) {
        software.amazon.jsii.Kernel.set(this, "ipWhiteList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProperties() {
        return software.amazon.jsii.Kernel.get(this, "properties", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProperties(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "properties", value);
    }

    /**
     */
    public void setProperties(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.maxcompute.RosProject.PropertiesProperty value) {
        software.amazon.jsii.Kernel.set(this, "properties", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.RosProject.EncryptionProperty")
    @software.amazon.jsii.Jsii.Proxy(EncryptionProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EncryptionProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAlgorithm() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EncryptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EncryptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EncryptionProperty> {
            java.lang.Object algorithm;
            java.lang.Object enable;
            java.lang.Object key;

            /**
             * Sets the value of {@link EncryptionProperty#getAlgorithm}
             * @param algorithm the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder algorithm(java.lang.String algorithm) {
                this.algorithm = algorithm;
                return this;
            }

            /**
             * Sets the value of {@link EncryptionProperty#getAlgorithm}
             * @param algorithm the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder algorithm(com.aliyun.ros.cdk.core.IResolvable algorithm) {
                this.algorithm = algorithm;
                return this;
            }

            /**
             * Sets the value of {@link EncryptionProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link EncryptionProperty#getEnable}
             * @param enable the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link EncryptionProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link EncryptionProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EncryptionProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EncryptionProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EncryptionProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EncryptionProperty {
            private final java.lang.Object algorithm;
            private final java.lang.Object enable;
            private final java.lang.Object key;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.algorithm = software.amazon.jsii.Kernel.get(this, "algorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.algorithm = builder.algorithm;
                this.enable = builder.enable;
                this.key = builder.key;
            }

            @Override
            public final java.lang.Object getAlgorithm() {
                return this.algorithm;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAlgorithm() != null) {
                    data.set("algorithm", om.valueToTree(this.getAlgorithm()));
                }
                if (this.getEnable() != null) {
                    data.set("enable", om.valueToTree(this.getEnable()));
                }
                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-maxcompute.RosProject.EncryptionProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EncryptionProperty.Jsii$Proxy that = (EncryptionProperty.Jsii$Proxy) o;

                if (this.algorithm != null ? !this.algorithm.equals(that.algorithm) : that.algorithm != null) return false;
                if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
                return this.key != null ? this.key.equals(that.key) : that.key == null;
            }

            @Override
            public final int hashCode() {
                int result = this.algorithm != null ? this.algorithm.hashCode() : 0;
                result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
                result = 31 * result + (this.key != null ? this.key.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.RosProject.IpWhiteListProperty")
    @software.amazon.jsii.Jsii.Proxy(IpWhiteListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IpWhiteListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVpcIpList() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IpWhiteListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IpWhiteListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IpWhiteListProperty> {
            java.lang.Object ipList;
            java.lang.Object vpcIpList;

            /**
             * Sets the value of {@link IpWhiteListProperty#getIpList}
             * @param ipList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipList(java.lang.String ipList) {
                this.ipList = ipList;
                return this;
            }

            /**
             * Sets the value of {@link IpWhiteListProperty#getIpList}
             * @param ipList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipList(com.aliyun.ros.cdk.core.IResolvable ipList) {
                this.ipList = ipList;
                return this;
            }

            /**
             * Sets the value of {@link IpWhiteListProperty#getVpcIpList}
             * @param vpcIpList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcIpList(java.lang.String vpcIpList) {
                this.vpcIpList = vpcIpList;
                return this;
            }

            /**
             * Sets the value of {@link IpWhiteListProperty#getVpcIpList}
             * @param vpcIpList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcIpList(com.aliyun.ros.cdk.core.IResolvable vpcIpList) {
                this.vpcIpList = vpcIpList;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IpWhiteListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IpWhiteListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IpWhiteListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IpWhiteListProperty {
            private final java.lang.Object ipList;
            private final java.lang.Object vpcIpList;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ipList = software.amazon.jsii.Kernel.get(this, "ipList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vpcIpList = software.amazon.jsii.Kernel.get(this, "vpcIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ipList = builder.ipList;
                this.vpcIpList = builder.vpcIpList;
            }

            @Override
            public final java.lang.Object getIpList() {
                return this.ipList;
            }

            @Override
            public final java.lang.Object getVpcIpList() {
                return this.vpcIpList;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIpList() != null) {
                    data.set("ipList", om.valueToTree(this.getIpList()));
                }
                if (this.getVpcIpList() != null) {
                    data.set("vpcIpList", om.valueToTree(this.getVpcIpList()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-maxcompute.RosProject.IpWhiteListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IpWhiteListProperty.Jsii$Proxy that = (IpWhiteListProperty.Jsii$Proxy) o;

                if (this.ipList != null ? !this.ipList.equals(that.ipList) : that.ipList != null) return false;
                return this.vpcIpList != null ? this.vpcIpList.equals(that.vpcIpList) : that.vpcIpList == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ipList != null ? this.ipList.hashCode() : 0;
                result = 31 * result + (this.vpcIpList != null ? this.vpcIpList.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.maxcompute.$Module.class, fqn = "@alicloud/ros-cdk-maxcompute.RosProject.PropertiesProperty")
    @software.amazon.jsii.Jsii.Proxy(PropertiesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PropertiesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAllowFullScan() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableDecimal2() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEncryption() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRetentionDays() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSqlMeteringMax() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTypeSystem() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PropertiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PropertiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PropertiesProperty> {
            java.lang.Object allowFullScan;
            java.lang.Object enableDecimal2;
            java.lang.Object encryption;
            java.lang.Object retentionDays;
            java.lang.Object sqlMeteringMax;
            java.lang.Object typeSystem;

            /**
             * Sets the value of {@link PropertiesProperty#getAllowFullScan}
             * @param allowFullScan the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowFullScan(java.lang.Boolean allowFullScan) {
                this.allowFullScan = allowFullScan;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getAllowFullScan}
             * @param allowFullScan the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder allowFullScan(com.aliyun.ros.cdk.core.IResolvable allowFullScan) {
                this.allowFullScan = allowFullScan;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getEnableDecimal2}
             * @param enableDecimal2 the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableDecimal2(java.lang.Boolean enableDecimal2) {
                this.enableDecimal2 = enableDecimal2;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getEnableDecimal2}
             * @param enableDecimal2 the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableDecimal2(com.aliyun.ros.cdk.core.IResolvable enableDecimal2) {
                this.enableDecimal2 = enableDecimal2;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getEncryption}
             * @param encryption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encryption(com.aliyun.ros.cdk.core.IResolvable encryption) {
                this.encryption = encryption;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getEncryption}
             * @param encryption the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder encryption(com.aliyun.ros.cdk.maxcompute.RosProject.EncryptionProperty encryption) {
                this.encryption = encryption;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getRetentionDays}
             * @param retentionDays the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retentionDays(java.lang.Number retentionDays) {
                this.retentionDays = retentionDays;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getRetentionDays}
             * @param retentionDays the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder retentionDays(com.aliyun.ros.cdk.core.IResolvable retentionDays) {
                this.retentionDays = retentionDays;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getSqlMeteringMax}
             * @param sqlMeteringMax the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sqlMeteringMax(java.lang.Number sqlMeteringMax) {
                this.sqlMeteringMax = sqlMeteringMax;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getSqlMeteringMax}
             * @param sqlMeteringMax the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sqlMeteringMax(com.aliyun.ros.cdk.core.IResolvable sqlMeteringMax) {
                this.sqlMeteringMax = sqlMeteringMax;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getTypeSystem}
             * @param typeSystem the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder typeSystem(java.lang.String typeSystem) {
                this.typeSystem = typeSystem;
                return this;
            }

            /**
             * Sets the value of {@link PropertiesProperty#getTypeSystem}
             * @param typeSystem the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder typeSystem(com.aliyun.ros.cdk.core.IResolvable typeSystem) {
                this.typeSystem = typeSystem;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PropertiesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PropertiesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PropertiesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PropertiesProperty {
            private final java.lang.Object allowFullScan;
            private final java.lang.Object enableDecimal2;
            private final java.lang.Object encryption;
            private final java.lang.Object retentionDays;
            private final java.lang.Object sqlMeteringMax;
            private final java.lang.Object typeSystem;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.allowFullScan = software.amazon.jsii.Kernel.get(this, "allowFullScan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableDecimal2 = software.amazon.jsii.Kernel.get(this, "enableDecimal2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.encryption = software.amazon.jsii.Kernel.get(this, "encryption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.retentionDays = software.amazon.jsii.Kernel.get(this, "retentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sqlMeteringMax = software.amazon.jsii.Kernel.get(this, "sqlMeteringMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.typeSystem = software.amazon.jsii.Kernel.get(this, "typeSystem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.allowFullScan = builder.allowFullScan;
                this.enableDecimal2 = builder.enableDecimal2;
                this.encryption = builder.encryption;
                this.retentionDays = builder.retentionDays;
                this.sqlMeteringMax = builder.sqlMeteringMax;
                this.typeSystem = builder.typeSystem;
            }

            @Override
            public final java.lang.Object getAllowFullScan() {
                return this.allowFullScan;
            }

            @Override
            public final java.lang.Object getEnableDecimal2() {
                return this.enableDecimal2;
            }

            @Override
            public final java.lang.Object getEncryption() {
                return this.encryption;
            }

            @Override
            public final java.lang.Object getRetentionDays() {
                return this.retentionDays;
            }

            @Override
            public final java.lang.Object getSqlMeteringMax() {
                return this.sqlMeteringMax;
            }

            @Override
            public final java.lang.Object getTypeSystem() {
                return this.typeSystem;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAllowFullScan() != null) {
                    data.set("allowFullScan", om.valueToTree(this.getAllowFullScan()));
                }
                if (this.getEnableDecimal2() != null) {
                    data.set("enableDecimal2", om.valueToTree(this.getEnableDecimal2()));
                }
                if (this.getEncryption() != null) {
                    data.set("encryption", om.valueToTree(this.getEncryption()));
                }
                if (this.getRetentionDays() != null) {
                    data.set("retentionDays", om.valueToTree(this.getRetentionDays()));
                }
                if (this.getSqlMeteringMax() != null) {
                    data.set("sqlMeteringMax", om.valueToTree(this.getSqlMeteringMax()));
                }
                if (this.getTypeSystem() != null) {
                    data.set("typeSystem", om.valueToTree(this.getTypeSystem()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-maxcompute.RosProject.PropertiesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PropertiesProperty.Jsii$Proxy that = (PropertiesProperty.Jsii$Proxy) o;

                if (this.allowFullScan != null ? !this.allowFullScan.equals(that.allowFullScan) : that.allowFullScan != null) return false;
                if (this.enableDecimal2 != null ? !this.enableDecimal2.equals(that.enableDecimal2) : that.enableDecimal2 != null) return false;
                if (this.encryption != null ? !this.encryption.equals(that.encryption) : that.encryption != null) return false;
                if (this.retentionDays != null ? !this.retentionDays.equals(that.retentionDays) : that.retentionDays != null) return false;
                if (this.sqlMeteringMax != null ? !this.sqlMeteringMax.equals(that.sqlMeteringMax) : that.sqlMeteringMax != null) return false;
                return this.typeSystem != null ? this.typeSystem.equals(that.typeSystem) : that.typeSystem == null;
            }

            @Override
            public final int hashCode() {
                int result = this.allowFullScan != null ? this.allowFullScan.hashCode() : 0;
                result = 31 * result + (this.enableDecimal2 != null ? this.enableDecimal2.hashCode() : 0);
                result = 31 * result + (this.encryption != null ? this.encryption.hashCode() : 0);
                result = 31 * result + (this.retentionDays != null ? this.retentionDays.hashCode() : 0);
                result = 31 * result + (this.sqlMeteringMax != null ? this.sqlMeteringMax.hashCode() : 0);
                result = 31 * result + (this.typeSystem != null ? this.typeSystem.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.maxcompute.RosProject}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.maxcompute.RosProject> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.maxcompute.RosProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.maxcompute.RosProjectProps.Builder();
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
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
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param comment This parameter is required.
         */
        public Builder comment(final java.lang.String comment) {
            this.props.comment(comment);
            return this;
        }
        /**
         * @return {@code this}
         * @param comment This parameter is required.
         */
        public Builder comment(final com.aliyun.ros.cdk.core.IResolvable comment) {
            this.props.comment(comment);
            return this;
        }

        /**
         * @return {@code this}
         * @param defaultQuota This parameter is required.
         */
        public Builder defaultQuota(final java.lang.String defaultQuota) {
            this.props.defaultQuota(defaultQuota);
            return this;
        }
        /**
         * @return {@code this}
         * @param defaultQuota This parameter is required.
         */
        public Builder defaultQuota(final com.aliyun.ros.cdk.core.IResolvable defaultQuota) {
            this.props.defaultQuota(defaultQuota);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipWhiteList This parameter is required.
         */
        public Builder ipWhiteList(final com.aliyun.ros.cdk.core.IResolvable ipWhiteList) {
            this.props.ipWhiteList(ipWhiteList);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipWhiteList This parameter is required.
         */
        public Builder ipWhiteList(final com.aliyun.ros.cdk.maxcompute.RosProject.IpWhiteListProperty ipWhiteList) {
            this.props.ipWhiteList(ipWhiteList);
            return this;
        }

        /**
         * @return {@code this}
         * @param properties This parameter is required.
         */
        public Builder properties(final com.aliyun.ros.cdk.core.IResolvable properties) {
            this.props.properties(properties);
            return this;
        }
        /**
         * @return {@code this}
         * @param properties This parameter is required.
         */
        public Builder properties(final com.aliyun.ros.cdk.maxcompute.RosProject.PropertiesProperty properties) {
            this.props.properties(properties);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.maxcompute.RosProject}.
         */
        @Override
        public com.aliyun.ros.cdk.maxcompute.RosProject build() {
            return new com.aliyun.ros.cdk.maxcompute.RosProject(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
