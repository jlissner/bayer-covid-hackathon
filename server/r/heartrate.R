############################################
#### Team Pandemirus COVID-19 Hackathon ####
############################################
### Simulate Pulse Rate Graph for       ####
### Healthy Patient v COVID-19 Patient  ####
############################################
### heartrate.R                         ####
############################################

fn_heartRate <- function(){

if(FALSE){
# Create a random sequence of 5 oscillations
# for a healthy patient

# short time example
hist(rgamma(100, 100, 100)/25)

# medium example
hist(rgamma(100, 100, 100)/5)

# long time example
hist(rgamma(100, 100, 100))
}

# The interarrival times of a heart rate change
# will be assumed to follow a random gamma

times_healthy_matrix <- matrix(
  c(
    rgamma(10, 100, 100)/5,
    rgamma(10, 100, 100)/3,
    rgamma(10, 100, 100)/1,
    rgamma(10, 100, 100)/5
  ),ncol=4
)

# take an r row x c col matrix and transform into vector
times_healthy_ind <- as.vector(t(times_healthy_matrix))

# make the vector cumlative in time
times_healthy <- cumsum(times_healthy_ind)


# Create a random sequence of 5 oscillations
# for an infected covid-19 patient

# The interarrival times of heart rate changes
# will be assumed to follow a random gamma

# The prior for the infected patient will
# have faster times than the
# healthy patient

times_covid_matrix <- matrix(
  c(
    rgamma(10, 100, 100)/5.25,
    rgamma(10, 100, 100)/3.25,
    rgamma(10, 100, 100)/1.2,
    rgamma(10, 100, 100)/5.25
  ),ncol=4
)

# convert matrix into vector by row
times_covid_ind <- as.vector(t(times_covid_matrix))

# make vector of times cumulative
times_covid <- cumsum(times_covid_ind)



# Create heart rate responses for
# a healthy patient

healthy_heartRate_matrix <- matrix(
  c(
    80 + rnorm(nrow(times_healthy_matrix),0,2),
    90 + rnorm(nrow(times_healthy_matrix),0,2),
    95 + rnorm(nrow(times_healthy_matrix),0,1),
    120 + rnorm(nrow(times_healthy_matrix),0,3)
  ), byrow = FALSE,ncol = 4)

# push the healthy heart rates from matrix into vector
healthy_heartRate <- as.vector(t(healthy_heartRate_matrix))


# Create heart rate responses for
# an infected patient

covid_heartRate_matrix <- matrix(
  c(
    83 + rnorm(nrow(times_healthy_matrix),0,2),
    92 + rnorm(nrow(times_healthy_matrix),0,2),
    98 + rnorm(nrow(times_healthy_matrix),0,1),
    125 + rnorm(nrow(times_healthy_matrix),0,3)
  ), byrow = FALSE,ncol = 4)

covid_heartRate <- as.vector(t(covid_heartRate_matrix))

if(FALSE){
# Plot for a healthy patient
plot(times_healthy,healthy_heartRate, pch = 16, cex = 0.1)
lines(times_healthy,healthy_heartRate, col = "darkgreen")

# Plot for an infected patient
plot(times_covid,covid_heartRate, pch = 16, cex = 0.1)
lines(times_covid,covid_heartRate, col = "darkred")
}

# Bind the healthy and infected patient data together
df_heartrate <- data.frame(rbind(cbind(times_healthy, healthy_heartRate, "Healthy"),
                      cbind(times_covid, covid_heartRate, "COVID-19")))

# rename the columns
colnames(df_heartrate) <- c("Time", "heartRate", "Diagnosis")

# transform numeric factors into numeric continuous
df_heartrate$Time <- as.numeric(as.character(df_heartrate$Time))
df_heartrate$heartRate <- as.numeric(as.character(df_heartrate$heartRate))

if(FALSE){
# plot data
ggplot(df_heartrate,
       aes(x = Time,
           y = heartRate,
           group = Diagnosis,
           colour = Diagnosis)) +
  geom_point() +
  geom_line() +
  ylim(floor(min(df_heartrate$heartRate)/5)*5, ceiling(max(df_heartrate$heartRate)/5)*5) +
  xlim(0,ceiling(max(df_heartrate$Time)/5)*5)
}

return(df_heartrate)
}

fn_heartRate()

