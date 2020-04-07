############################################
#### Team Pandemirus COVID-19 Hackathon ####
############################################
### Simulate Pulse Rate Graph for       ####
### Healthy Patient v COVID-19 Patient  ####
############################################
### pulserate.R                         ####
############################################

fn_pulseRate <- function(){
# load required package
library(ggplot2)

# Create a random sequence of 5 oscillations
# for a healthy patient

if(FALSE){
# short time example
hist(rgamma(100, 100, 100)/25)

# medium example
hist(rgamma(100, 100, 100)/5)

# long time example
hist(rgamma(100, 100, 100))
}

# The interarrival times of pulse rate changes
# will be assumed to follow a random gamma

times_healthy_matrix <- matrix(
  c(
    rgamma(10, 100, 100)/4/1.2,
    rgamma(10, 100, 100)/4/3,
    rgamma(10, 100, 100)/4/3,
    rgamma(10, 100, 100)/4/10,
    rgamma(10, 100, 100)/4/3,
    rgamma(10, 100, 100)/4/3,
    rgamma(10, 100, 100)/4/3,
    rgamma(10, 100, 100)/4/10,
    rgamma(10, 100, 100)/4/3,
    rgamma(10, 100, 100)/4/3
  ),ncol=10
)

# Take an r row x c col matrix and transform into vector
times_healthy_ind <- as.vector(t(times_healthy_matrix))

# Make the vector cumulative in time
times_healthy <- cumsum(times_healthy_ind)



# Create a random sequence of 5 oscillations
# for an infected covid-19 patient

# The interarrival times of pulse rate changes
# will be assumed to follow a random gamma

# The prior for the infected patient will
# have faster times than the
# healthy patient

times_covid_matrix <- matrix(
  c(
    rgamma(10, 100, 100)/1.3,
    rgamma(10, 100, 100)/3.1,
    rgamma(10, 100, 100)/3.1,
    rgamma(10, 100, 100)/10.1,
    rgamma(10, 100, 100)/3.1,
    rgamma(10, 100, 100)/3.1,
    rgamma(10, 100, 100)/3.1,
    rgamma(10, 100, 100)/10.1,
    rgamma(10, 100, 100)/3.1,
    rgamma(10, 100, 100)/3.1
  ),ncol=10
)

# convert matrix into vector by row
times_covid_ind <- as.vector(t(times_covid_matrix))

# make vector of times cumulative
times_covid <- cumsum(times_covid_ind)/4


# Create pulse rate responses for
# a healthy patient

healthy_pulseRate_matrix <- matrix(
  c(
    rep(50,nrow(times_healthy_matrix)), #0
    rep(50,nrow(times_healthy_matrix)), #1
    60 + rnorm(nrow(times_healthy_matrix),0,2), #2
    rep(50,nrow(times_healthy_matrix)), #3
    rep(50,nrow(times_healthy_matrix)), #4
    80 + rnorm(nrow(times_healthy_matrix),0,2), #5
    10 + rnorm(nrow(times_healthy_matrix),0,2), #6
    rep(50,nrow(times_healthy_matrix)), #7
    rep(50,nrow(times_healthy_matrix)), #8
    55 + rnorm(nrow(times_healthy_matrix),0,1) #9
  ), byrow = FALSE,ncol = 10)

# push the healthy pulse rates from matrix into vector
healthy_pulseRate <- as.vector(t(healthy_pulseRate_matrix))



# Create pulse rate responses for
# an infected patient

covid_pulseRate_matrix <- matrix(
  c(
    rep(52,nrow(times_healthy_matrix)), #0
    rep(52,nrow(times_healthy_matrix)), #1
    62 + rnorm(nrow(times_healthy_matrix),0,4), #2
    rep(52,nrow(times_healthy_matrix)), #3
    rep(52,nrow(times_healthy_matrix)), #4
    82 + rnorm(nrow(times_healthy_matrix),0,3), #5
    12 + rnorm(nrow(times_healthy_matrix),0,3), #6
    rep(52,nrow(times_healthy_matrix)), #7
    rep(52,nrow(times_healthy_matrix)), #8
    57 + rnorm(nrow(times_healthy_matrix),0,2) #9
  ), byrow = FALSE,ncol = 10)

covid_pulseRate <- as.vector(t(covid_pulseRate_matrix))

if(FALSE){
# Plot for a healthy patient
plot(times_healthy,healthy_pulseRate, pch = 16, cex = 0.1)
lines(times_healthy,healthy_pulseRate, col = "darkgreen")

# Plot for an infected patient
plot(times_covid,covid_pulseRate, pch = 16, cex = 0.1)
lines(times_covid,covid_pulseRate, col = "darkred")
}

# Bind the healthy and infected patient data together
df_pulserate <- data.frame(rbind(cbind(times_healthy, healthy_pulseRate, "Healthy"),
                                 cbind(times_covid, covid_pulseRate, "COVID-19")))

# Rename columns
colnames(df_pulserate) <- c("Time", "pulseRate", "Diagnosis")

# Transform factor data into numeric
df_pulserate$Time <- as.numeric(as.character(df_pulserate$Time))
df_pulserate$pulseRate <- as.numeric(as.character(df_pulserate$pulseRate))

# preview data
head(df_pulserate,n=4);tail(df_pulserate,n=4);dim(df_pulserate)

# turn off graph plot
# if(FALSE){
# # Create a plot of both lines on the same graph
# ggplot(df_pulserate,  # data
#        aes(x = Time, # x-axis
#            y = pulseRate, # y-axis
#            group = Diagnosis, #group
#            colour = Diagnosis)) + # color
#   geom_point(size =0 ) + # turn off points
#   geom_line() +  # turn on lines
#   ylim(floor(min(df_pulserate$pulseRate)/1)*1, ceiling(max(df_pulserate$pulseRate)/1)*1) +
#   xlim(0,ceiling(max(df_pulserate$Time)/1)*1)
# }

return(df_pulserate)

}

fn_pulseRate()
