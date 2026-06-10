package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a <code>RosSwimmingLane</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglane
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:38:16.823Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosSwimmingLaneProps")
@software.amazon.jsii.Jsii.Proxy(RosSwimmingLaneProps.Jsii$Proxy.class)
public interface RosSwimmingLaneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEntryRules();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogicalRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTag();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppInfos() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableRules() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSwimmingLaneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSwimmingLaneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSwimmingLaneProps> {
        java.lang.Object entryRules;
        java.lang.Object groupId;
        java.lang.Object logicalRegionId;
        java.lang.Object name;
        java.lang.Object tag;
        java.lang.Object appInfos;
        java.lang.Object enableRules;

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getEntryRules}
         * @param entryRules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder entryRules(com.aliyun.ros.cdk.core.IResolvable entryRules) {
            this.entryRules = entryRules;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getEntryRules}
         * @param entryRules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder entryRules(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> entryRules) {
            this.entryRules = entryRules;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.Number groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getLogicalRegionId}
         * @param logicalRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logicalRegionId(java.lang.String logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getLogicalRegionId}
         * @param logicalRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logicalRegionId(com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getTag}
         * @param tag the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tag(java.lang.String tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getTag}
         * @param tag the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getAppInfos}
         * @param appInfos the value to be set.
         * @return {@code this}
         */
        public Builder appInfos(com.aliyun.ros.cdk.core.IResolvable appInfos) {
            this.appInfos = appInfos;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getAppInfos}
         * @param appInfos the value to be set.
         * @return {@code this}
         */
        public Builder appInfos(java.util.List<? extends java.lang.Object> appInfos) {
            this.appInfos = appInfos;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getEnableRules}
         * @param enableRules the value to be set.
         * @return {@code this}
         */
        public Builder enableRules(java.lang.Boolean enableRules) {
            this.enableRules = enableRules;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneProps#getEnableRules}
         * @param enableRules the value to be set.
         * @return {@code this}
         */
        public Builder enableRules(com.aliyun.ros.cdk.core.IResolvable enableRules) {
            this.enableRules = enableRules;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSwimmingLaneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSwimmingLaneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSwimmingLaneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSwimmingLaneProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosSwimmingLaneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSwimmingLaneProps.Jsii$Proxy that = (RosSwimmingLaneProps.Jsii$Proxy) o;

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
