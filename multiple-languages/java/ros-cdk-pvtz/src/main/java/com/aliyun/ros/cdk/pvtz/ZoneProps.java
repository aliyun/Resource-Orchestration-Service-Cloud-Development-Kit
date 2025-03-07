package com.aliyun.ros.cdk.pvtz;

/**
 * Properties for defining a <code>Zone</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zone
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.273Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.ZoneProps")
@software.amazon.jsii.Jsii.Proxy(ZoneProps.Jsii$Proxy.class)
public interface ZoneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property zoneName: Zone name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneName();

    /**
     * Property dnsGroup: Built-in authority location area.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>NORMAL_ZONE: Default. normal zone (The parsing response result will be cached, and only back to the built-in authority normal zone if the cache is missed, the effect of parsing changes is affected by TTL time; Cannot use custom line analysis, weight analysis function.</li>
     * <li>FAST_ZONE: Fast zone (Recommended: directly reply to the parsing request, the parsing delay is the lowest, and the record changes take effect in real time; Support custom line analysis, weight analysis.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsGroup() {
        return null;
    }

    /**
     * Property ignoredStackTagKeys: Stack tag keys to ignore.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIgnoredStackTagKeys() {
        return null;
    }

    /**
     * Property proxyPattern: ZONE: completely hijack the entire zone.
     * <p>
     * RECORD: Incomplete hijacking, recursive resolution agent.
     * Default to ZONE.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyPattern() {
        return null;
    }

    /**
     * Property remark: 50 characters at most.
     * <p>
     * It can only contain numbers, Chinese, English and special characters: "_-,.，。".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ZoneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ZoneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ZoneProps> {
        java.lang.Object zoneName;
        java.lang.Object dnsGroup;
        java.lang.Object ignoredStackTagKeys;
        java.lang.Object proxyPattern;
        java.lang.Object remark;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty> tags;

        /**
         * Sets the value of {@link ZoneProps#getZoneName}
         * @param zoneName Property zoneName: Zone name. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneName(java.lang.String zoneName) {
            this.zoneName = zoneName;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getZoneName}
         * @param zoneName Property zoneName: Zone name. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneName(com.aliyun.ros.cdk.core.IResolvable zoneName) {
            this.zoneName = zoneName;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getDnsGroup}
         * @param dnsGroup Property dnsGroup: Built-in authority location area.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li>NORMAL_ZONE: Default. normal zone (The parsing response result will be cached, and only back to the built-in authority normal zone if the cache is missed, the effect of parsing changes is affected by TTL time; Cannot use custom line analysis, weight analysis function.</li>
         *                 <li>FAST_ZONE: Fast zone (Recommended: directly reply to the parsing request, the parsing delay is the lowest, and the record changes take effect in real time; Support custom line analysis, weight analysis.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder dnsGroup(java.lang.String dnsGroup) {
            this.dnsGroup = dnsGroup;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getDnsGroup}
         * @param dnsGroup Property dnsGroup: Built-in authority location area.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li>NORMAL_ZONE: Default. normal zone (The parsing response result will be cached, and only back to the built-in authority normal zone if the cache is missed, the effect of parsing changes is affected by TTL time; Cannot use custom line analysis, weight analysis function.</li>
         *                 <li>FAST_ZONE: Fast zone (Recommended: directly reply to the parsing request, the parsing delay is the lowest, and the record changes take effect in real time; Support custom line analysis, weight analysis.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder dnsGroup(com.aliyun.ros.cdk.core.IResolvable dnsGroup) {
            this.dnsGroup = dnsGroup;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getIgnoredStackTagKeys}
         * @param ignoredStackTagKeys Property ignoredStackTagKeys: Stack tag keys to ignore.
         * @return {@code this}
         */
        public Builder ignoredStackTagKeys(com.aliyun.ros.cdk.core.IResolvable ignoredStackTagKeys) {
            this.ignoredStackTagKeys = ignoredStackTagKeys;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getIgnoredStackTagKeys}
         * @param ignoredStackTagKeys Property ignoredStackTagKeys: Stack tag keys to ignore.
         * @return {@code this}
         */
        public Builder ignoredStackTagKeys(java.util.List<? extends java.lang.Object> ignoredStackTagKeys) {
            this.ignoredStackTagKeys = ignoredStackTagKeys;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getProxyPattern}
         * @param proxyPattern Property proxyPattern: ZONE: completely hijack the entire zone.
         *                     RECORD: Incomplete hijacking, recursive resolution agent.
         *                     Default to ZONE.
         * @return {@code this}
         */
        public Builder proxyPattern(java.lang.String proxyPattern) {
            this.proxyPattern = proxyPattern;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getProxyPattern}
         * @param proxyPattern Property proxyPattern: ZONE: completely hijack the entire zone.
         *                     RECORD: Incomplete hijacking, recursive resolution agent.
         *                     Default to ZONE.
         * @return {@code this}
         */
        public Builder proxyPattern(com.aliyun.ros.cdk.core.IResolvable proxyPattern) {
            this.proxyPattern = proxyPattern;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getRemark}
         * @param remark Property remark: 50 characters at most.
         *               It can only contain numbers, Chinese, English and special characters: "_-,.，。".
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getRemark}
         * @param remark Property remark: 50 characters at most.
         *               It can only contain numbers, Chinese, English and special characters: "_-,.，。".
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ZoneProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ZoneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ZoneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ZoneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ZoneProps {
        private final java.lang.Object zoneName;
        private final java.lang.Object dnsGroup;
        private final java.lang.Object ignoredStackTagKeys;
        private final java.lang.Object proxyPattern;
        private final java.lang.Object remark;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.zoneName = software.amazon.jsii.Kernel.get(this, "zoneName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dnsGroup = software.amazon.jsii.Kernel.get(this, "dnsGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ignoredStackTagKeys = software.amazon.jsii.Kernel.get(this, "ignoredStackTagKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyPattern = software.amazon.jsii.Kernel.get(this, "proxyPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.zoneName = java.util.Objects.requireNonNull(builder.zoneName, "zoneName is required");
            this.dnsGroup = builder.dnsGroup;
            this.ignoredStackTagKeys = builder.ignoredStackTagKeys;
            this.proxyPattern = builder.proxyPattern;
            this.remark = builder.remark;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.pvtz.RosZone.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getZoneName() {
            return this.zoneName;
        }

        @Override
        public final java.lang.Object getDnsGroup() {
            return this.dnsGroup;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("zoneName", om.valueToTree(this.getZoneName()));
            if (this.getDnsGroup() != null) {
                data.set("dnsGroup", om.valueToTree(this.getDnsGroup()));
            }
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

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.ZoneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ZoneProps.Jsii$Proxy that = (ZoneProps.Jsii$Proxy) o;

            if (!zoneName.equals(that.zoneName)) return false;
            if (this.dnsGroup != null ? !this.dnsGroup.equals(that.dnsGroup) : that.dnsGroup != null) return false;
            if (this.ignoredStackTagKeys != null ? !this.ignoredStackTagKeys.equals(that.ignoredStackTagKeys) : that.ignoredStackTagKeys != null) return false;
            if (this.proxyPattern != null ? !this.proxyPattern.equals(that.proxyPattern) : that.proxyPattern != null) return false;
            if (this.remark != null ? !this.remark.equals(that.remark) : that.remark != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.zoneName.hashCode();
            result = 31 * result + (this.dnsGroup != null ? this.dnsGroup.hashCode() : 0);
            result = 31 * result + (this.ignoredStackTagKeys != null ? this.ignoredStackTagKeys.hashCode() : 0);
            result = 31 * result + (this.proxyPattern != null ? this.proxyPattern.hashCode() : 0);
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
