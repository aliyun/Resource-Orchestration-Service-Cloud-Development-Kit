package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a `ALIYUN::SLS::Dashboard`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:11.776Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosDashboardProps")
@software.amazon.jsii.Jsii.Proxy(RosDashboardProps.Jsii$Proxy.class)
public interface RosDashboardProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCharts();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDashboardName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisplayName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDashboardProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDashboardProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDashboardProps> {
        java.lang.Object charts;
        java.lang.Object dashboardName;
        java.lang.Object projectName;
        java.lang.Object description;
        java.lang.Object displayName;

        /**
         * Sets the value of {@link RosDashboardProps#getCharts}
         * @param charts the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder charts(com.aliyun.ros.cdk.core.IResolvable charts) {
            this.charts = charts;
            return this;
        }

        /**
         * Sets the value of {@link RosDashboardProps#getCharts}
         * @param charts the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder charts(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> charts) {
            this.charts = charts;
            return this;
        }

        /**
         * Sets the value of {@link RosDashboardProps#getDashboardName}
         * @param dashboardName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dashboardName(java.lang.String dashboardName) {
            this.dashboardName = dashboardName;
            return this;
        }

        /**
         * Sets the value of {@link RosDashboardProps#getDashboardName}
         * @param dashboardName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dashboardName(com.aliyun.ros.cdk.core.IResolvable dashboardName) {
            this.dashboardName = dashboardName;
            return this;
        }

        /**
         * Sets the value of {@link RosDashboardProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosDashboardProps#getProjectName}
         * @param projectName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link RosDashboardProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDashboardProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDashboardProps#getDisplayName}
         * @param displayName the value to be set.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosDashboardProps#getDisplayName}
         * @param displayName the value to be set.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDashboardProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDashboardProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDashboardProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDashboardProps {
        private final java.lang.Object charts;
        private final java.lang.Object dashboardName;
        private final java.lang.Object projectName;
        private final java.lang.Object description;
        private final java.lang.Object displayName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.charts = software.amazon.jsii.Kernel.get(this, "charts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dashboardName = software.amazon.jsii.Kernel.get(this, "dashboardName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.charts = java.util.Objects.requireNonNull(builder.charts, "charts is required");
            this.dashboardName = java.util.Objects.requireNonNull(builder.dashboardName, "dashboardName is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.description = builder.description;
            this.displayName = builder.displayName;
        }

        @Override
        public final java.lang.Object getCharts() {
            return this.charts;
        }

        @Override
        public final java.lang.Object getDashboardName() {
            return this.dashboardName;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("charts", om.valueToTree(this.getCharts()));
            data.set("dashboardName", om.valueToTree(this.getDashboardName()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDisplayName() != null) {
                data.set("displayName", om.valueToTree(this.getDisplayName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosDashboardProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDashboardProps.Jsii$Proxy that = (RosDashboardProps.Jsii$Proxy) o;

            if (!charts.equals(that.charts)) return false;
            if (!dashboardName.equals(that.dashboardName)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.displayName != null ? this.displayName.equals(that.displayName) : that.displayName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.charts.hashCode();
            result = 31 * result + (this.dashboardName.hashCode());
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.displayName != null ? this.displayName.hashCode() : 0);
            return result;
        }
    }
}
