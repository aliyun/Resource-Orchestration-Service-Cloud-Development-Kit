package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a <code>RosSwimmingLaneGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglanegroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:38:16.823Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosSwimmingLaneGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosSwimmingLaneGroupProps.Jsii$Proxy.class)
public interface RosSwimmingLaneGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppIds();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEntryApp();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLogicalRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * @return a {@link Builder} of {@link RosSwimmingLaneGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSwimmingLaneGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSwimmingLaneGroupProps> {
        java.lang.Object appIds;
        java.lang.Object entryApp;
        java.lang.Object logicalRegionId;
        java.lang.Object name;

        /**
         * Sets the value of {@link RosSwimmingLaneGroupProps#getAppIds}
         * @param appIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appIds(com.aliyun.ros.cdk.core.IResolvable appIds) {
            this.appIds = appIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneGroupProps#getAppIds}
         * @param appIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder appIds(java.util.List<? extends java.lang.Object> appIds) {
            this.appIds = appIds;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneGroupProps#getEntryApp}
         * @param entryApp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder entryApp(java.lang.String entryApp) {
            this.entryApp = entryApp;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneGroupProps#getEntryApp}
         * @param entryApp the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder entryApp(com.aliyun.ros.cdk.core.IResolvable entryApp) {
            this.entryApp = entryApp;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneGroupProps#getLogicalRegionId}
         * @param logicalRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logicalRegionId(java.lang.String logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneGroupProps#getLogicalRegionId}
         * @param logicalRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder logicalRegionId(com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneGroupProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosSwimmingLaneGroupProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSwimmingLaneGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSwimmingLaneGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSwimmingLaneGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSwimmingLaneGroupProps {
        private final java.lang.Object appIds;
        private final java.lang.Object entryApp;
        private final java.lang.Object logicalRegionId;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appIds = software.amazon.jsii.Kernel.get(this, "appIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.entryApp = software.amazon.jsii.Kernel.get(this, "entryApp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logicalRegionId = software.amazon.jsii.Kernel.get(this, "logicalRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appIds = java.util.Objects.requireNonNull(builder.appIds, "appIds is required");
            this.entryApp = java.util.Objects.requireNonNull(builder.entryApp, "entryApp is required");
            this.logicalRegionId = java.util.Objects.requireNonNull(builder.logicalRegionId, "logicalRegionId is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
        }

        @Override
        public final java.lang.Object getAppIds() {
            return this.appIds;
        }

        @Override
        public final java.lang.Object getEntryApp() {
            return this.entryApp;
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
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appIds", om.valueToTree(this.getAppIds()));
            data.set("entryApp", om.valueToTree(this.getEntryApp()));
            data.set("logicalRegionId", om.valueToTree(this.getLogicalRegionId()));
            data.set("name", om.valueToTree(this.getName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosSwimmingLaneGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSwimmingLaneGroupProps.Jsii$Proxy that = (RosSwimmingLaneGroupProps.Jsii$Proxy) o;

            if (!appIds.equals(that.appIds)) return false;
            if (!entryApp.equals(that.entryApp)) return false;
            if (!logicalRegionId.equals(that.logicalRegionId)) return false;
            return this.name.equals(that.name);
        }

        @Override
        public final int hashCode() {
            int result = this.appIds.hashCode();
            result = 31 * result + (this.entryApp.hashCode());
            result = 31 * result + (this.logicalRegionId.hashCode());
            result = 31 * result + (this.name.hashCode());
            return result;
        }
    }
}
