package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a <code>SwimmingLane</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglane
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:25.514Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.SwimmingLaneProps")
@software.amazon.jsii.Jsii.Proxy(SwimmingLaneProps.Jsii$Proxy.class)
public interface SwimmingLaneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property entryRules: The entry rules of the swimming lane.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEntryRules();

    /**
     * Property groupId: The group ID of the swimming lane.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     * Property logicalRegionId: The RegionId of the logical region.
     * <p>
     * Format: <code>physicalRegion:customNamespaceIdentifier</code>.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogicalRegionId();

    /**
     * Property name: The name of the swimming lane.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property tag: The tag of the swimming lane.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTag();

    /**
     * Property appInfos: Application information involved in the swimming lane.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppInfos() {
        return null;
    }

    /**
     * Property enableRules: Whether to enable flow control rules.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableRules() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SwimmingLaneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SwimmingLaneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SwimmingLaneProps> {
        java.lang.Object entryRules;
        java.lang.Object groupId;
        java.lang.Object logicalRegionId;
        java.lang.Object name;
        java.lang.Object tag;
        java.lang.Object appInfos;
        java.lang.Object enableRules;

        /**
         * Sets the value of {@link SwimmingLaneProps#getEntryRules}
         * @param entryRules Property entryRules: The entry rules of the swimming lane. This parameter is required.
         * @return {@code this}
         */
        public Builder entryRules(com.aliyun.ros.cdk.core.IResolvable entryRules) {
            this.entryRules = entryRules;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getEntryRules}
         * @param entryRules Property entryRules: The entry rules of the swimming lane. This parameter is required.
         * @return {@code this}
         */
        public Builder entryRules(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> entryRules) {
            this.entryRules = entryRules;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getGroupId}
         * @param groupId Property groupId: The group ID of the swimming lane. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.Number groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getGroupId}
         * @param groupId Property groupId: The group ID of the swimming lane. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getLogicalRegionId}
         * @param logicalRegionId Property logicalRegionId: The RegionId of the logical region. This parameter is required.
         *                        Format: <code>physicalRegion:customNamespaceIdentifier</code>.
         * @return {@code this}
         */
        public Builder logicalRegionId(java.lang.String logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getLogicalRegionId}
         * @param logicalRegionId Property logicalRegionId: The RegionId of the logical region. This parameter is required.
         *                        Format: <code>physicalRegion:customNamespaceIdentifier</code>.
         * @return {@code this}
         */
        public Builder logicalRegionId(com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getName}
         * @param name Property name: The name of the swimming lane. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getName}
         * @param name Property name: The name of the swimming lane. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getTag}
         * @param tag Property tag: The tag of the swimming lane. This parameter is required.
         * @return {@code this}
         */
        public Builder tag(java.lang.String tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getTag}
         * @param tag Property tag: The tag of the swimming lane. This parameter is required.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getAppInfos}
         * @param appInfos Property appInfos: Application information involved in the swimming lane.
         * @return {@code this}
         */
        public Builder appInfos(com.aliyun.ros.cdk.core.IResolvable appInfos) {
            this.appInfos = appInfos;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getAppInfos}
         * @param appInfos Property appInfos: Application information involved in the swimming lane.
         * @return {@code this}
         */
        public Builder appInfos(java.util.List<? extends java.lang.Object> appInfos) {
            this.appInfos = appInfos;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getEnableRules}
         * @param enableRules Property enableRules: Whether to enable flow control rules.
         * @return {@code this}
         */
        public Builder enableRules(java.lang.Boolean enableRules) {
            this.enableRules = enableRules;
            return this;
        }

        /**
         * Sets the value of {@link SwimmingLaneProps#getEnableRules}
         * @param enableRules Property enableRules: Whether to enable flow control rules.
         * @return {@code this}
         */
        public Builder enableRules(com.aliyun.ros.cdk.core.IResolvable enableRules) {
            this.enableRules = enableRules;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SwimmingLaneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SwimmingLaneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SwimmingLaneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SwimmingLaneProps {
        private final java.lang.Object entryRules;
        private final java.lang.Object groupId;
        private final java.lang.Object logicalRegionId;
        private final java.lang.Object name;
        private final java.lang.Object tag;
        private final java.lang.Object appInfos;
        private final java.lang.Object enableRules;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.entryRules = software.amazon.jsii.Kernel.get(this, "entryRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logicalRegionId = software.amazon.jsii.Kernel.get(this, "logicalRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appInfos = software.amazon.jsii.Kernel.get(this, "appInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableRules = software.amazon.jsii.Kernel.get(this, "enableRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.entryRules = java.util.Objects.requireNonNull(builder.entryRules, "entryRules is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.logicalRegionId = java.util.Objects.requireNonNull(builder.logicalRegionId, "logicalRegionId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.tag = java.util.Objects.requireNonNull(builder.tag, "tag is required");
            this.appInfos = builder.appInfos;
            this.enableRules = builder.enableRules;
        }

        @Override
        public final java.lang.Object getEntryRules() {
            return this.entryRules;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getLogicalRegionId() {
            return this.logicalRegionId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getTag() {
            return this.tag;
        }

        @Override
        public final java.lang.Object getAppInfos() {
            return this.appInfos;
        }

        @Override
        public final java.lang.Object getEnableRules() {
            return this.enableRules;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("entryRules", om.valueToTree(this.getEntryRules()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("logicalRegionId", om.valueToTree(this.getLogicalRegionId()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("tag", om.valueToTree(this.getTag()));
            if (this.getAppInfos() != null) {
                data.set("appInfos", om.valueToTree(this.getAppInfos()));
            }
            if (this.getEnableRules() != null) {
                data.set("enableRules", om.valueToTree(this.getEnableRules()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.SwimmingLaneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SwimmingLaneProps.Jsii$Proxy that = (SwimmingLaneProps.Jsii$Proxy) o;

            if (!entryRules.equals(that.entryRules)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!logicalRegionId.equals(that.logicalRegionId)) return false;
            if (!name.equals(that.name)) return false;
            if (!tag.equals(that.tag)) return false;
            if (this.appInfos != null ? !this.appInfos.equals(that.appInfos) : that.appInfos != null) return false;
            return this.enableRules != null ? this.enableRules.equals(that.enableRules) : that.enableRules == null;
        }

        @Override
        public final int hashCode() {
            int result = this.entryRules.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.logicalRegionId.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.tag.hashCode());
            result = 31 * result + (this.appInfos != null ? this.appInfos.hashCode() : 0);
            result = 31 * result + (this.enableRules != null ? this.enableRules.hashCode() : 0);
            return result;
        }
    }
}
