package com.aliyun.ros.cdk.pvtz;

/**
 * Properties for defining a `ALIYUN::PVTZ::Zone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:20.215Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.RosZoneProps")
@software.amazon.jsii.Jsii.Proxy(RosZoneProps.Jsii$Proxy.class)
public interface RosZoneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoredStackTagKeys() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyPattern() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneTag() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosZoneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosZoneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosZoneProps> {
        java.lang.Object zoneName;
        java.lang.Object ignoredStackTagKeys;
        java.lang.Object proxyPattern;
        java.lang.Object remark;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty> tags;
        java.lang.Object zoneTag;
        java.lang.Object zoneType;

        /**
         * Sets the value of {@link RosZoneProps#getZoneName}
         * @param zoneName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneName(java.lang.String zoneName) {
            this.zoneName = zoneName;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getZoneName}
         * @param zoneName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneName(com.aliyun.ros.cdk.core.IResolvable zoneName) {
            this.zoneName = zoneName;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getIgnoredStackTagKeys}
         * @param ignoredStackTagKeys the value to be set.
         * @return {@code this}
         */
        public Builder ignoredStackTagKeys(com.aliyun.ros.cdk.core.IResolvable ignoredStackTagKeys) {
            this.ignoredStackTagKeys = ignoredStackTagKeys;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getIgnoredStackTagKeys}
         * @param ignoredStackTagKeys the value to be set.
         * @return {@code this}
         */
        public Builder ignoredStackTagKeys(java.util.List<? extends java.lang.Object> ignoredStackTagKeys) {
            this.ignoredStackTagKeys = ignoredStackTagKeys;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getProxyPattern}
         * @param proxyPattern the value to be set.
         * @return {@code this}
         */
        public Builder proxyPattern(java.lang.String proxyPattern) {
            this.proxyPattern = proxyPattern;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getProxyPattern}
         * @param proxyPattern the value to be set.
         * @return {@code this}
         */
        public Builder proxyPattern(com.aliyun.ros.cdk.core.IResolvable proxyPattern) {
            this.proxyPattern = proxyPattern;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getRemark}
         * @param remark the value to be set.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getZoneTag}
         * @param zoneTag the value to be set.
         * @return {@code this}
         */
        public Builder zoneTag(java.lang.String zoneTag) {
            this.zoneTag = zoneTag;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getZoneTag}
         * @param zoneTag the value to be set.
         * @return {@code this}
         */
        public Builder zoneTag(com.aliyun.ros.cdk.core.IResolvable zoneTag) {
            this.zoneTag = zoneTag;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getZoneType}
         * @param zoneType the value to be set.
         * @return {@code this}
         */
        public Builder zoneType(java.lang.String zoneType) {
            this.zoneType = zoneType;
            return this;
        }

        /**
         * Sets the value of {@link RosZoneProps#getZoneType}
         * @param zoneType the value to be set.
         * @return {@code this}
         */
        public Builder zoneType(com.aliyun.ros.cdk.core.IResolvable zoneType) {
            this.zoneType = zoneType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosZoneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosZoneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosZoneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosZoneProps {
        private final java.lang.Object zoneName;
        private final java.lang.Object ignoredStackTagKeys;
        private final java.lang.Object proxyPattern;
        private final java.lang.Object remark;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty> tags;
        private final java.lang.Object zoneTag;
        private final java.lang.Object zoneType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.zoneName = software.amazon.jsii.Kernel.get(this, "zoneName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ignoredStackTagKeys = software.amazon.jsii.Kernel.get(this, "ignoredStackTagKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyPattern = software.amazon.jsii.Kernel.get(this, "proxyPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty.class)));
            this.zoneTag = software.amazon.jsii.Kernel.get(this, "zoneTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneType = software.amazon.jsii.Kernel.get(this, "zoneType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.zoneName = java.util.Objects.requireNonNull(builder.zoneName, "zoneName is required");
            this.ignoredStackTagKeys = builder.ignoredStackTagKeys;
            this.proxyPattern = builder.proxyPattern;
            this.remark = builder.remark;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty>)builder.tags;
            this.zoneTag = builder.zoneTag;
            this.zoneType = builder.zoneType;
        }

        @Override
        public final java.lang.Object getZoneName() {
            return this.zoneName;
        }

        @Override
        public final java.lang.Object getIgnoredStackTagKeys() {
            return this.ignoredStackTagKeys;
        }

        @Override
        public final java.lang.Object getProxyPattern() {
            return this.proxyPattern;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getZoneTag() {
            return this.zoneTag;
        }

        @Override
        public final java.lang.Object getZoneType() {
            return this.zoneType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("zoneName", om.valueToTree(this.getZoneName()));
            if (this.getIgnoredStackTagKeys() != null) {
                data.set("ignoredStackTagKeys", om.valueToTree(this.getIgnoredStackTagKeys()));
            }
            if (this.getProxyPattern() != null) {
                data.set("proxyPattern", om.valueToTree(this.getProxyPattern()));
            }
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZoneTag() != null) {
                data.set("zoneTag", om.valueToTree(this.getZoneTag()));
            }
            if (this.getZoneType() != null) {
                data.set("zoneType", om.valueToTree(this.getZoneType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.RosZoneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosZoneProps.Jsii$Proxy that = (RosZoneProps.Jsii$Proxy) o;

            if (!zoneName.equals(that.zoneName)) return false;
            if (this.ignoredStackTagKeys != null ? !this.ignoredStackTagKeys.equals(that.ignoredStackTagKeys) : that.ignoredStackTagKeys != null) return false;
            if (this.proxyPattern != null ? !this.proxyPattern.equals(that.proxyPattern) : that.proxyPattern != null) return false;
            if (this.remark != null ? !this.remark.equals(that.remark) : that.remark != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.zoneTag != null ? !this.zoneTag.equals(that.zoneTag) : that.zoneTag != null) return false;
            return this.zoneType != null ? this.zoneType.equals(that.zoneType) : that.zoneType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.zoneName.hashCode();
            result = 31 * result + (this.ignoredStackTagKeys != null ? this.ignoredStackTagKeys.hashCode() : 0);
            result = 31 * result + (this.proxyPattern != null ? this.proxyPattern.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zoneTag != null ? this.zoneTag.hashCode() : 0);
            result = 31 * result + (this.zoneType != null ? this.zoneType.hashCode() : 0);
            return result;
        }
    }
}
