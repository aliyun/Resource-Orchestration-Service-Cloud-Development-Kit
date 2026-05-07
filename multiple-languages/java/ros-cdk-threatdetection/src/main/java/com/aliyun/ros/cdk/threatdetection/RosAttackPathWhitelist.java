package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::AttackPathWhitelist</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.695Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelist")
public class RosAttackPathWhitelist extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAttackPathWhitelist(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAttackPathWhitelist(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelist.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAttackPathWhitelist(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelistProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAttackPathAssetList() {
        return software.amazon.jsii.Kernel.get(this, "attrAttackPathAssetList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAttackPathWhitelistId() {
        return software.amazon.jsii.Kernel.get(this, "attrAttackPathWhitelistId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPathName() {
        return software.amazon.jsii.Kernel.get(this, "attrPathName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPathType() {
        return software.amazon.jsii.Kernel.get(this, "attrPathType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRemark() {
        return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWhitelistName() {
        return software.amazon.jsii.Kernel.get(this, "attrWhitelistName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWhitelistType() {
        return software.amazon.jsii.Kernel.get(this, "attrWhitelistType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPathName() {
        return software.amazon.jsii.Kernel.get(this, "pathName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPathName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pathName", java.util.Objects.requireNonNull(value, "pathName is required"));
    }

    /**
     */
    public void setPathName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pathName", java.util.Objects.requireNonNull(value, "pathName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPathType() {
        return software.amazon.jsii.Kernel.get(this, "pathType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPathType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pathType", java.util.Objects.requireNonNull(value, "pathType is required"));
    }

    /**
     */
    public void setPathType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pathType", java.util.Objects.requireNonNull(value, "pathType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWhitelistName() {
        return software.amazon.jsii.Kernel.get(this, "whitelistName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWhitelistName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "whitelistName", java.util.Objects.requireNonNull(value, "whitelistName is required"));
    }

    /**
     */
    public void setWhitelistName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "whitelistName", java.util.Objects.requireNonNull(value, "whitelistName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWhitelistType() {
        return software.amazon.jsii.Kernel.get(this, "whitelistType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWhitelistType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "whitelistType", java.util.Objects.requireNonNull(value, "whitelistType is required"));
    }

    /**
     */
    public void setWhitelistType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "whitelistType", java.util.Objects.requireNonNull(value, "whitelistType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAttackPathAssetList() {
        return software.amazon.jsii.Kernel.get(this, "attackPathAssetList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAttackPathAssetList(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "attackPathAssetList", value);
    }

    /**
     */
    public void setAttackPathAssetList(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelist.AttackPathAssetListProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelist.AttackPathAssetListProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "attackPathAssetList", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }

    /**
     */
    public void setRemark(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "remark", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelist.AttackPathAssetListProperty")
    @software.amazon.jsii.Jsii.Proxy(AttackPathAssetListProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AttackPathAssetListProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVendor();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAssetSubType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAssetType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNodeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AttackPathAssetListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AttackPathAssetListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AttackPathAssetListProperty> {
            java.lang.Object vendor;
            java.lang.Object assetSubType;
            java.lang.Object assetType;
            java.lang.Object instanceId;
            java.lang.Object nodeType;
            java.lang.Object regionId;

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getVendor}
             * @param vendor the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vendor(java.lang.Number vendor) {
                this.vendor = vendor;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getVendor}
             * @param vendor the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vendor(com.aliyun.ros.cdk.core.IResolvable vendor) {
                this.vendor = vendor;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getAssetSubType}
             * @param assetSubType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder assetSubType(java.lang.Number assetSubType) {
                this.assetSubType = assetSubType;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getAssetSubType}
             * @param assetSubType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder assetSubType(com.aliyun.ros.cdk.core.IResolvable assetSubType) {
                this.assetSubType = assetSubType;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getAssetType}
             * @param assetType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder assetType(java.lang.Number assetType) {
                this.assetType = assetType;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getAssetType}
             * @param assetType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder assetType(com.aliyun.ros.cdk.core.IResolvable assetType) {
                this.assetType = assetType;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getNodeType}
             * @param nodeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeType(java.lang.String nodeType) {
                this.nodeType = nodeType;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getNodeType}
             * @param nodeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nodeType(com.aliyun.ros.cdk.core.IResolvable nodeType) {
                this.nodeType = nodeType;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(java.lang.String regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link AttackPathAssetListProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AttackPathAssetListProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AttackPathAssetListProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AttackPathAssetListProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AttackPathAssetListProperty {
            private final java.lang.Object vendor;
            private final java.lang.Object assetSubType;
            private final java.lang.Object assetType;
            private final java.lang.Object instanceId;
            private final java.lang.Object nodeType;
            private final java.lang.Object regionId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.vendor = software.amazon.jsii.Kernel.get(this, "vendor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.assetSubType = software.amazon.jsii.Kernel.get(this, "assetSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.assetType = software.amazon.jsii.Kernel.get(this, "assetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nodeType = software.amazon.jsii.Kernel.get(this, "nodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.vendor = java.util.Objects.requireNonNull(builder.vendor, "vendor is required");
                this.assetSubType = builder.assetSubType;
                this.assetType = builder.assetType;
                this.instanceId = builder.instanceId;
                this.nodeType = builder.nodeType;
                this.regionId = builder.regionId;
            }

            @Override
            public final java.lang.Object getVendor() {
                return this.vendor;
            }

            @Override
            public final java.lang.Object getAssetSubType() {
                return this.assetSubType;
            }

            @Override
            public final java.lang.Object getAssetType() {
                return this.assetType;
            }

            @Override
            public final java.lang.Object getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.Object getNodeType() {
                return this.nodeType;
            }

            @Override
            public final java.lang.Object getRegionId() {
                return this.regionId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("vendor", om.valueToTree(this.getVendor()));
                if (this.getAssetSubType() != null) {
                    data.set("assetSubType", om.valueToTree(this.getAssetSubType()));
                }
                if (this.getAssetType() != null) {
                    data.set("assetType", om.valueToTree(this.getAssetType()));
                }
                if (this.getInstanceId() != null) {
                    data.set("instanceId", om.valueToTree(this.getInstanceId()));
                }
                if (this.getNodeType() != null) {
                    data.set("nodeType", om.valueToTree(this.getNodeType()));
                }
                if (this.getRegionId() != null) {
                    data.set("regionId", om.valueToTree(this.getRegionId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosAttackPathWhitelist.AttackPathAssetListProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AttackPathAssetListProperty.Jsii$Proxy that = (AttackPathAssetListProperty.Jsii$Proxy) o;

                if (!vendor.equals(that.vendor)) return false;
                if (this.assetSubType != null ? !this.assetSubType.equals(that.assetSubType) : that.assetSubType != null) return false;
                if (this.assetType != null ? !this.assetType.equals(that.assetType) : that.assetType != null) return false;
                if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
                if (this.nodeType != null ? !this.nodeType.equals(that.nodeType) : that.nodeType != null) return false;
                return this.regionId != null ? this.regionId.equals(that.regionId) : that.regionId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.vendor.hashCode();
                result = 31 * result + (this.assetSubType != null ? this.assetSubType.hashCode() : 0);
                result = 31 * result + (this.assetType != null ? this.assetType.hashCode() : 0);
                result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
                result = 31 * result + (this.nodeType != null ? this.nodeType.hashCode() : 0);
                result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelist}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelist> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelistProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelistProps.Builder();
        }

        /**
         * @return {@code this}
         * @param pathName This parameter is required.
         */
        public Builder pathName(final java.lang.String pathName) {
            this.props.pathName(pathName);
            return this;
        }
        /**
         * @return {@code this}
         * @param pathName This parameter is required.
         */
        public Builder pathName(final com.aliyun.ros.cdk.core.IResolvable pathName) {
            this.props.pathName(pathName);
            return this;
        }

        /**
         * @return {@code this}
         * @param pathType This parameter is required.
         */
        public Builder pathType(final java.lang.String pathType) {
            this.props.pathType(pathType);
            return this;
        }
        /**
         * @return {@code this}
         * @param pathType This parameter is required.
         */
        public Builder pathType(final com.aliyun.ros.cdk.core.IResolvable pathType) {
            this.props.pathType(pathType);
            return this;
        }

        /**
         * @return {@code this}
         * @param whitelistName This parameter is required.
         */
        public Builder whitelistName(final java.lang.String whitelistName) {
            this.props.whitelistName(whitelistName);
            return this;
        }
        /**
         * @return {@code this}
         * @param whitelistName This parameter is required.
         */
        public Builder whitelistName(final com.aliyun.ros.cdk.core.IResolvable whitelistName) {
            this.props.whitelistName(whitelistName);
            return this;
        }

        /**
         * @return {@code this}
         * @param whitelistType This parameter is required.
         */
        public Builder whitelistType(final java.lang.String whitelistType) {
            this.props.whitelistType(whitelistType);
            return this;
        }
        /**
         * @return {@code this}
         * @param whitelistType This parameter is required.
         */
        public Builder whitelistType(final com.aliyun.ros.cdk.core.IResolvable whitelistType) {
            this.props.whitelistType(whitelistType);
            return this;
        }

        /**
         * @return {@code this}
         * @param attackPathAssetList This parameter is required.
         */
        public Builder attackPathAssetList(final com.aliyun.ros.cdk.core.IResolvable attackPathAssetList) {
            this.props.attackPathAssetList(attackPathAssetList);
            return this;
        }
        /**
         * @return {@code this}
         * @param attackPathAssetList This parameter is required.
         */
        public Builder attackPathAssetList(final java.util.List<? extends java.lang.Object> attackPathAssetList) {
            this.props.attackPathAssetList(attackPathAssetList);
            return this;
        }

        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * @return {@code this}
         * @param remark This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelist}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelist build() {
            return new com.aliyun.ros.cdk.threatdetection.RosAttackPathWhitelist(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
